const db = require('../services/db')

const userSchema = new db.Schema({

    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    age: {
        type: String,
    },

    phone: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});


const User = db.model('user', userSchema);

module.exports = User;