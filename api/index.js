const express = require('express');
const router = express.Router();

require('./routes/scores')(router);
module.exports = router;
