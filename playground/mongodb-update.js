// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5b7c602c215588394465075a')
    },{
        $set: { name: 'Łukasz Kuciel' },
        $inc : { age : 1 }
    }, {
        returnOriginal:false
    }).then(res => console.log(res))

    client.close();
});