const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id : 4
};

let token = jwt.sign(data, '123456abc')
token;

let decoded = jwt.verify(token, '123456abc');
decoded;

// let message = 'Iam user nr 3';
// let hash = SHA256(message).toString();


// let token = {
//     data, 
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//     console.log("Data was not changed");    
// }
// else{
//     console.log("Data was changed. Do not trust!");
// }