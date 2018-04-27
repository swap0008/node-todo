const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'ToDoApp';
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    
    console.log('Successfully connect to MongoDB server.');
    
    const col = client.db(dbName).collection('Users');
    
    /*col.findOneAndUpdate({
        _id: new ObjectID('5ae352da721ca05d00b7666b')
    }, {
        $set: {
            completed: false,
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/
    
    col.findOneAndUpdate({
        _id: new ObjectID('5ae2f06f31e2a532902b29a1')
    }, {
        $set: {
            name: 'Amanda Cerny'
        },
        $inc: {
            age: -13
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    client.close();
});