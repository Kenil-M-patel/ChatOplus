const router = require('express').Router();

const { registerCustomer, loginCustomer, customerProfile } = require('./authController');

router.post('/register', registerCustomer);
router.post('/login', loginCustomer);
router.get('/profile', customerProfile);

module.exports = router;