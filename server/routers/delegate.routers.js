const userRouter = require('./user.router');
const workoutRouter = require('./workout.router');
const programRouter = require('./program.router');

function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/workout', workoutRouter);
    app.use('/api/program', programRouter);
      
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;