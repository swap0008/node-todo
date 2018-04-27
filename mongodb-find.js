const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'ToDoApp';
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.', err);
    }
    
    console.log('Successfully connected to MongoDB server.');
    
   /* client.db(dbName).collection('Todos').find({
        completed: false
    }).toArray().then((docs) => {
        console.log('ToDos');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch information.', err);
    });*/
    
   client.db(dbName).collection('Users').find().toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch data.', err);
    });
    
    
    client.close();
});