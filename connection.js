require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@mini-shop.mkkjudh.mongodb.net/ecomern-yt?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongoDb '))
.catch(err => console.log(err))

mongoose.connection.on('error', err =>{
    console.log(err);
})

/*MONGO_USERNAME=ecomerce-yt
MONGO_PW=spoHv5EAQdT7388p*/
//const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.bs065w6.mongodb.net/ecomerceyt?retryWrites=true&w=majority`;

/** 
 * CLOUD_NAME=diluthhyx
CLOUD_API_KEY=123832634362717
CLOUD_API_SECRET=doDqVf4VSgP3C5REibXOLeWHot4
 */