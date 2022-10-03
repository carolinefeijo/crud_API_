const express = require('express');
const router = express.Router();

const Recipe = require('../models/RecipeModel')

// Register new recipe
router.post('/create', async (req, res) => {
    try {
        const recipe = req.body;

        const recipeSaved = await Recipe.create(recipe)

        if (recipeSaved != null) {
            return res.status(200).send({ message: "receita salva com sucesso" });
        } else {
            return res.status(401).send({ message: "erro ao salvar a receita" });
        }

    } catch {
        return res.status(400).send({ message: "error register recipe" });
    }
})

// list recipes
router.get('/list/highlights', async (req, res) => {
    try {

        const recipesHighlights = await Recipe.find()

        if (recipesHighlights != null) {
            return res.status(200).send(recipesHighlights);
        } else {
            return res.status(200).send({ message: 'nao foi encontrado receitas' });
        }

    } catch {
        return res.status(400).send({ message: "error list recipe" });
    }
})


// params: id
router.get('/', async (req, res) => {
    try {
       const { id } = req.query;
      
        if(id){
            const recipeDB = await Recipe.findById(id)
            if(recipeDB) {
                return res.status(200).send(recipeDB); 
            } else {
                return res.status(400).send({ message: 'nao foi encontrado receitas para este id' }); 
            }
        } else {
            return res.status(401).send({ message: 'necessario enviar um id como parametro' }); 
        }       
    } catch {
        return res.status(400).send({ message: 'erro interno' }); 
    }
})

module.exports = app => app.use('/recipe', router);