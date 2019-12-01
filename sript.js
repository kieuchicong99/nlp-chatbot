const fs = require('fs')
var data
fs.readFile('./data/cm.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    // console.log('File data:', jsonString) 
    jsonString = JSON.parse(jsonString)
    data = jsonString['intents']
    data.forEach((item,index) => {
        delete item.a_id
        item.patterns = [item.patterns]
        item.responses = [item.responses]
        item = JSON.stringify(item)        
        //  console.log(data)
    });
    
       
    
    // data ={"intents":data}
    data = JSON.stringify(data)
    fs.writeFile("./data/new.json", data, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    
   
})

