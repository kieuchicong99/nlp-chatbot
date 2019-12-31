import json
import pickle
import random
import tensorflow as tf
import tflearn
import numpy as np
import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()


data = pickle.load(open("models/training_data", "rb"))
words = data['words']
classes = data['classes']
train_x = data['train_x']
train_y = data['train_y']

with open('data/viet.json') as json_data:
    intents = json.load(json_data)


net = tflearn.input_data(shape=[None, len(train_x[0])])
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, len(train_y[0]), activation='softmax')
net = tflearn.regression(net, optimizer='adam',
                         loss='categorical_crossentropy')

model = tflearn.DNN(net, tensorboard_dir='tflearn_logs')


def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)

    sentence_words = [stemmer.stem(word.lower()) for word in sentence_words]
    return sentence_words

# bag of words


def bow(sentence, words, show_details=False):
    sentence_words = clean_up_sentence(sentence)
    # bag of words
    bag = [0]*len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print("found in bag: %s" % w)

    return(np.array(bag))


bow('I want to special food', words)


# load model
model.load('./models/model.tflearn')


# data structure to hold user context
context = {}

ERROR_THRESHOLD = 0.25


def classify(sentence):
    results = model.predict([bow(sentence, words)])[0]
    results = [[i, r] for i, r in enumerate(results) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append((classes[r[0]], r[1]))
    return return_list


def response(sentence, userID='1', show_details=False):
    results = classify(sentence)
    if results:
        while results:
            for i in intents['intents']:
                if i['tag'] == results[0][0]:
                    if 'context_set' in i:
                        if show_details:
                            print('context:', i['context_set'])
                        context[userID] = i['context_set']
                    if not 'context_filter' in i or (userID in context and 'context_filter' in i and i['context_filter'] == context[userID]):
                        if show_details:
                            print('tag:', i['tag'])

                        return random.choice(i['responses'])
                        

            results.pop(0)
