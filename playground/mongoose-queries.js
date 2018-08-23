const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

let id = '5b7c76480ff6a42b84444494';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

// Todo.find({ _id: id }).then(todos => console.log('Todos', todos));

// Todo.findOne({ _id: id }).then(todo => console.log('Todo', todo));

// Todo.findById(id)
//     .then(todo => {
//         if(!todo){
//             return console.log('Id not found!');
//         }
//         console.log('Todo By Id', todo)
//     })
//     .catch(e => console.log(e));


User.findById(id)
    .then(user => {
        !user ? console.log('User not found!') : console.log(JSON.stringify(user, null, 2));
    })
    .catch(e => console.log(e))