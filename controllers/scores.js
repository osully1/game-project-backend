const Score = require('../models/score');

module.exports = {
    index,
    create
}

// function index(req, res) {
//     Score.find({}, function (err, scores) {
//         res.json(scores)
//     })
// }

async function index(req, res) {
    try {
        const score = await Score.find({});
        res.status(200).json(score); // send skills as JSON data as an HTTP response
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
 }

 async function create(req, res) {
    try {
        const score = await Score.create(req.body);
        res.status(200).json(score); // send skills as JSON data as an HTTP response
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
 }