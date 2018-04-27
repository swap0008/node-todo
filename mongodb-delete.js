const MongoClient = require('mongodb').MongoClient;

const dbName = 'ToDoApp';
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.', err);
    }

    console.log('Successfully connected to MongoDB server.');
    
    const col = client.db(dbName).collection('Todos');
    
    //deleteOne
    /*col.deleteOne({test: 'Do something'}).then((result) => {
        console.log(result.result);
    }, (err) => {
        console.log(err);
    });*/
    
    //deleteMany
    /*col.deleteMany({test: 'Do something'}).then((result) => {
        console.log(result.result);
    }, (err) => {
        console.log(err);
    });*/
    
    //findOneAndDelete
    col.findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });
    
    
    client.close();
});
