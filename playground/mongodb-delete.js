// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    //delete multiple
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((res) => {
    //     console.log(res);
    // })

    delete single
    db.collection('User').deleteOne({name:'John Doe'}).then((res) => {
        console.log(res);
    })

    //delete single finded
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // })

    // db.collection('User').deleteMany({name:'Lukasz Kuciel'}).then((res) => {
    //     console.log(res);
    // })

    // db.collection('User').findOneAndDelete({_id: new ObjectID('5b75e48863c4e142ec79b233')}).then((res) => {
    //     console.log(res);
    // })

    client.close();
});