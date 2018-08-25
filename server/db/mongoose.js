let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = "mongodb://LukaszKuciel:SpSDLcbRAyM5HAU6@todoapi-shard-00-00-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-01-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-02-j1yyk.gcp.mongodb.net:27017/test?ssl=true&replicaSet=TodoApi-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = {mongoose};