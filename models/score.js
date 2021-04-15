const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    player1Score: {type: String, required: true},
    player2Score: {type: String, required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Score', scoreSchema)