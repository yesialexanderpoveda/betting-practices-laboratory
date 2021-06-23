const jwt = require('jsonwebtoken')
const config = require('../config/config')

exports.verifyToken = async (req, res, next) => {

    const token = req.headers['authorization'];
    if (!token) res.send('Access denied');
    jwt.verify(token, config.SECRET, (err, user) => {
        if (err) {
            res.send('Access denied')
        } else {
            next();
        }

    })

    console.log(token)
}