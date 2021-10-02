const express = require('express');
const apiRouter = require('./routes/api');
const app = express();
require('./db');


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000);

app.use('/api', apiRouter);
app.listen(app.get('port'), () => {
    console.log('Server run of the port ', app.get('port'));
})