const express = require('express');
const getDb = require('../database/bootstrap.database');

const workoutRouter = express.Router();

// test worked
workoutRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.getWorkout( [id] )
        .then( workout => res.status(200).send(workout))
        .catch( err => res.status(500).send(err))
});

// test worked
workoutRouter.get('/', (req, res) => {
    const db = getDb();
    db.READ.getWorkouts( )
        .then( workouts => res.status(200).send(workouts))
        .catch( err => res.status(500).send(err))
});

// test worked
workoutRouter.post('/create', (req, res) => {
    const { name } = req.body;
    const db = getDb();
    db.CREATE.createWorkout([ name ])
        .then( workouts => res.status(200).send(workouts))
        .catch( err => res.status(500).send(err))
});

module.exports = workoutRouter;