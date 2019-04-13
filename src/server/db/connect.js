const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://trlogic:trlogic123@cluster0-iu4ux.mongodb.net/user?retryWrites=true',{ useNewUrlParser: true } );
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('MongoDB: Error', error);
    });

    mongoose.Promise = global.Promise;
};