const router = require('express').Router();

const { getmessages} = require('./messageController');

router.get('/getmessages', getmessages );

module.exports = router;