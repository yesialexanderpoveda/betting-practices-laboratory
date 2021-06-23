const express = require('express');
const controller = require('../controllers/user')
const token = require('../middlewares/auth')
const router = express.Router();


/*Router post signUp*/
router.post(`/api/signUp`, controller.signUp)

/*Router post signIn*/
router.post(`/api/signIn`, controller.signIn)

//router.get('/api/home',  token.verifyToken)


module.exports = router;