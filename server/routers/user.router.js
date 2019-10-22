const express = require('express');
const getDb = require('../database/bootstrap.database');

const userRouter = express.Router();

// test worked
userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.getUser( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});

// //test worked
userRouter.post('/register', (req, res) => {
    const db = getDb();
    const { first_name, last_name, email, password } = req.body;
    db.CREATE.createUser([ first_name, last_name, email, password ])
        .then( (user) => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});

// //test worked
userRouter.put('/update/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const { first_name, last_name, email, password } = req.body;
    db.UPDATE.updateUser([id, first_name, last_name, email, password])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});

//test worked
userRouter.delete('/delete/:id', (req, res) => { 
    const id = req.params.id;   
    const db = getDb();
    db.DELETE.deleteUser(req.params.id)
        .then( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = userRouter;