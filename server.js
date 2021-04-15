const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./config/database');

const scoresRouter = require('./routes/api/scores');

app.use(morgan('dev'));
app.use(express.json()); //converts incoming json into req.body
app.use(cors());

// app.get('/api/scores', function (req, res) {
// 	res.json(scores);
// });

app.use('/api/scores', scoresRouter);

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express is listening for AJAX requests on port ${port}`);
})