const express = require('express');

const addMiddleware = require('./middleware/decorate.middleware');

const app = express();
addMiddleware(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`\n===================================\n Server is listening on port ${port}. \n===================================\n`);
})