const router = require('express').Router();
const authorized = require('../middleware/auth');

router.use(authorized); // authorise middleware

const v1Routes = require('./v1');

router.use('/v1', v1Routes);

module.exports = router;