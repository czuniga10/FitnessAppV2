const express = require('express');
const getDb = require('../database/bootstrap.database');

const programRouter = express.Router();

// test worked
programRouter.get('/:userID', (req, res) => {
    const id = req.params.userID;
    const db = getDb();
    db.READ.getPrograms( [id] )
        .then( program => res.status(200).send(program))
        .catch( err => res.status(500).send(err))
});
//test worked
programRouter.get('/program-workouts/:programID', (req, res) => {
    const id = req.params.programID;
    const db = getDb();
    db.READ.getProgramWorkouts( [id] )
        .then( programWorkouts => res.status(200).send(programWorkouts))
        .catch( err => res.status(500).send(err))
});

//NOT TESTED -- need to figure out a way to get workoutID instead of the name of the workout..
programRouter.post('/create', (req, res) => {
    const {workoutID, sets, reps} = req.body;
    const db = getDb();
    db.READ.createProgramWorkouts( [workoutID, sets, reps] )
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err))
});

programRouter.patch('/update-check', (req, res) => {
    const {id, iscomplete} = req.body;
    const db = getDb();
    db.UPDATE.updateChecked( [id, iscomplete] )
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err))
});



module.exports = programRouter;