const mongoose = require('mongoose');



const hostSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true,  
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    seguro: {
        type: String,
        required: true
    },
    passport: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
});


const Host = mongoose.model('Host', hostSchema, 'host');

module.exports = Host;
