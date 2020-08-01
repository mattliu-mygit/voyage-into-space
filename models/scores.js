const mongoose = require('mongoose');

const ScoresSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  score: {
    type: Number,
  },
});

module.exports = mongoose.model('Scores', ScoresSchema);
