const mongoose = require('mongoose');

const ScoresSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  settlers: {
    type: Number,
  },
});

module.exports = mongoose.model('Scores', ScoresSchema);
