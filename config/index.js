const jwt = require('jsonwebtoken');
const fs = require('fs');
process.env.NODE_ENV = 'production';

/**
  auth middleware
*/
const jwtSecret = fs.readFileSync(__dirname+'./../jwtSecret.txt',
    {encoding:'utf8', flag:'r'});

const jwtSEC =jwtSecret;

const jwtCheck = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, jwtSEC, (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.authInfo = user.email;
        next();
    });
};

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 9000,
    jwtExpiresIn: 86400,
    jwtMiddleware: jwtCheck,
    jwtSecret: jwtSEC
};

if (process.env.NODE_ENV === 'production') {
    console.log('production');
    config.mongoUri = 'mongodb://udacity_nano:udacity123@ds121105.mlab.com:21105/udacity-capstone';
}

module.exports = config;
