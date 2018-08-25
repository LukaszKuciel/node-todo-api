let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let uri = "mongodb://LukaszKuciel:SpSDLcbRAyM5HAU6@todoapi-shard-00-00-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-01-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-02-j1yyk.gcp.mongodb.net:27017/test?ssl=true&replicaSet=TodoApi-shard-0&authSource=admin&retryWrites=true";
// if(process.env.PORT){
//     uri = "mongodb://LukaszKuciel:SpSDLcbRAyM5HAU6@todoapi-shard-00-00-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-01-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-02-j1yyk.gcp.mongodb.net:27017/test?ssl=true&replicaSet=TodoApi-shard-0&authSource=admin&retryWrites=true";
// }else{
//     uri = "mongodb://localhost:27017/TodoApp";
// }

mongoose.connect(uri, { useNewUrlParser: true });

module.exports = {mongoose};