
import pickle
import json
import random
import tensorflow as tf
import tflearn
import numpy as np
import nltk
from nltk.stem.lancaster import LancasterStemmer
from underthesea import word_tokenize as seg_vie

stemmer = LancasterStemmer()


with open('data/viet.json') as json_data:
    intents = json.load(json_data)


words = []
classes = []
documents = []
ignore_words = ['?', 'và', 'à', 'ừ', 'ạ', 'vì', 'từng', 'một_cách', 'nhé','rồi', 'vậy','.','!','nha']

for intent in intents['intents']:
    for pattern in intent['patterns']:
        sentiment = seg_vie(pattern, format="text")
        w = nltk.word_tokenize(sentiment)
        words.extend(w)
        documents.append((w, intent['tag']))
        if intent['tag'] not in classes:
            classes.append(intent['tag'])

words = [stemmer.stem(w.lower()) for w in words if w not in ignore_words]
words = sorted(list(set(words)))

classes = sorted(list(set(classes)))

print(len(documents), "documents")
print(len(classes), "classes", classes)
print(len(words), "unique stemmed words", words)

# Create training data

training = []
output = []

output_empty = [0] * len(classes)

for doc in documents:
    bag = []
    pattern_words = doc[0]
    pattern_words = [stemmer.stem(word.lower()) for word in pattern_words]

    for w in words:
        bag.append(1) if w in pattern_words else bag.append(0)

    output_row = list(output_empty)
    output_row[classes.index(doc[1])] = 1

    training.append([bag, output_row])

random.shuffle(training)
training = np.array(training)

train_x = list(training[:, 0])
train_y = list(training[:, 1])


tf.reset_default_graph()

net = tflearn.input_data(shape=[None, len(train_x[0])])
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, len(train_y[0]), activation='softmax')
net = tflearn.regression(net, optimizer='adam',
                         loss='categorical_crossentropy')

model = tflearn.DNN(net, tensorboard_dir='tflearn_logs')

model.fit(train_x, train_y, n_epoch=2000, batch_size=8, show_metric=True)
model.save('models/model.tflearn')


pickle.dump({'words': words, 'classes': classes, 'train_x': train_x,
             'train_y': train_y}, open("models/training_data", "wb"))
