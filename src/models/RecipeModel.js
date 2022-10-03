const db = require('../services/db')

const recipeSchema = new db.Schema({

    title: {
        type: String,
    },

    description: {
        type: String,
    },

    timeCook: {
        type: Number,
    },

    image: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    pigs: {
        type: String,
    }
});


const Recipe = db.model('recipe', recipeSchema);

module.exports = Recipe;