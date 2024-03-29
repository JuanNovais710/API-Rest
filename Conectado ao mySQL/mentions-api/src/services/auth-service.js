'use strict'
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}
exports.decodeTOken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}
exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito.'
        });
    }
    else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido.'
                });
            } else {
                next();
            }
        });
    }
};