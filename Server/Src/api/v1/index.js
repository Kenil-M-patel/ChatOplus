const router = require('express').Router();
const auth = require('./auth/authRoutes');
const message = require('./message/messageRoute')

router.use('/auth', auth);
router.use('/message', message);


module.exports = router;