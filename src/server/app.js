const expreess = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require('./routes/index');

const API_PORT = 5000;
const app = expreess();
app.use(cors());

const database = require('./db/connect')();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', routes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));