let env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if(env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}else if(env === 'production'){
    process.env.MONGODB_URI = "mongodb://LukaszKuciel:SpSDLcbRAyM5HAU6@todoapi-shard-00-00-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-01-j1yyk.gcp.mongodb.net:27017,todoapi-shard-00-02-j1yyk.gcp.mongodb.net:27017/test?ssl=true&replicaSet=TodoApi-shard-0&authSource=admin&retryWrites=true";
}