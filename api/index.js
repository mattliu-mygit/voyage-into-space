const express = require('express');
const router = express.Router();

require('./routes/Scores')(router);
module.exports = router;
