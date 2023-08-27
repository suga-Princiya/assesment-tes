const { Register, LoginUser, getUser, updateUser } = require('../Controller/UserController');
const _g = require('../Util/global_functions');
const router = require('express').Router();

router.post('/register',Register);
router.post('/login',LoginUser);
router.get('/get-user/:id',_g.authenticateToken,getUser);
router.put('/update-user/:id',_g.authenticateToken,updateUser);

module.exports = router; 