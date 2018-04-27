const MongoClient = require('mongodb').MongoClient;
const dbName = 'ToDoApp';
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) =>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Successfully connected to MongoDB server.');
    
    /*client.db(dbName).collection('Todos').insertOne({
        name: 'Swapnil Sharma',
        age: 20,
        job: 'Web Developer'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert data.', err);
        }
        
        console.log(JSON.stringify(result.ops, undefined, 4));
    });*/
    
    client.db(dbName).collection('Users').insertOne({
        name: 'Tony Stark',
        age: 40,
        location: 'New York'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert data.', err);
        }
        
        console.log(result);
    });
    
    client.close();
});