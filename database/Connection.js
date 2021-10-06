const mongoose = require('mongoose');
require('dotenv/config');

const connectDB = async() => {
    await mongoose.connect(process.env.DB_CONNECT,
    {
        useUnifiedTopology : true, 
        useNewUrlParser : true
    });
    console.log('Successful connection to the database [GRAPHQL Strated]');
}

module.exports = connectDB;