// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text:'Learning node',
        completed: false
    }, (err, res) => {
        if(err){
            return console.log('Unable to insert todo.', err);
        }
        console.log(JSON.stringify(res.ops, null, 2));
    })

    db.collection('User').insertOne({
        name:'Lukasz Kuciel',
        age: 27,
        location:'New York'
    }, (err, res) => {
        if(err){
            return console.log('Unable to insert user.', err);
        }
        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), null, 2));
    })

    client.close();
});