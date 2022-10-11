const express = require('express');
const router = express.Router();

const User = require('../models/UserModel')

// Registrar usuario
router.post('/create', async (req, res) => {
    try {
        const { body } = req;
        console.log(body)
        if (body != null) {
            const userData = await User.create(body);

            if (userData != null) {
                return res.status(201).send({ message: "usuário criado com sucesso" });
            } else {
                return res.status(401).send({ message: "Falha ao criar o usuário" });
            }

        } else {
            return res.status(401).send({ message: "necessario enviar um objeto com os atributos do usuario" });
        }

    } catch {
        return res.status(400).send({ message: "error server" });
    }
})

// Listar todos os usúarios
router.get('/list', async (req, res) => {
    try {

        const usersDb = await User.find()

        if (usersDb != null) {
            return res.status(200).send(usersDb);
        } else {
            return res.status(401).send({ message: "error ao listar usuários" });
        }


    } catch {
        return res.status(400).send({ message: "error server" });
    }
})

// Deletar usúario
router.delete('/delete', async (req, res) => {
    try {

        const { id } = req.query;

        if (id != null) {
            const userData = await User.findByIdAndDelete(id)

            if (userData != null) {
                return res.status(200).send({ message: "sucesso ao deletar o usuário" });
            } else {
                return res.status(401).send({ message: "falha ao deletar o usuário" });
            }
        } else {
            return res.status(401).send({ message: "id nao encontrado" });
        }
    } catch {
        return res.status(400).send({ message: "error server" });
    }
})

// Atualizar ou ler todos os usúarios
router.put('/update', async (req, res) => {
    try {
        const { query, body } = req

        if (query && body) {
            const userDb = await User.findByIdAndUpdate(query.id, body)
            console.log(userDb)

        } else {
            return res.status(401).send({ message: "necessario enviar todos os parametros" });
        }
    } catch {
        return res.status(400).send({ message: "error server" });
    }
})

//LISTA APENAS 1 USUARIO
router.get('/list/user', async (req, res) => {

    const { id } = req.query;
    try {
        console.log(id)
        const userDb = await User.findById(id)

        if (userDb != null) {
            return res.status(200).send(userDb);
        } else {
            return res.status(401).send({ message: "error ao editar usuário" });
        }

    } catch {
        return res.status(400).send({ message: "error server" });
    }
})

module.exports = app => app.use('/user', router);