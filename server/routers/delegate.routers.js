const userRouter = require('./user.router');
const workoutRouter = require('./workout.router');

function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/workout', workoutRouter);
      
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;