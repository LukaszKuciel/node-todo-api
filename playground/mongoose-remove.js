const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

let id = '5b816708a1632800064c3bff';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

//remove all
//Todo.remove({}).then(result => console.log(result));

//find one and remove
//Todo.findOneAndRemove({_id: id}).then(todo => console.log(todo));

//find by id and delete
//Todo.findByIdAndDelete(id).then(todo => console.log(todo));