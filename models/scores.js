const mongoose = require('mongoose');

const ScoresSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  score: {
    type: Number,
  },
});

module.exports = mongoose.model('Scores', ScoresSchema);
