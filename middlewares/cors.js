var express = require('express');


var cors = function() {
    var router = express.Router();

    /**
     * CORS support.
     */
    router.all('*', function(req, res, next) {
        if (!req.get('Origin')) {
            return next();
        }
        // use "*" here to accept any origin
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'PUT');
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        if ('OPTIONS' === req.method) {
            return res.status(200).end();
        }
        next();
    });

    return router;

};



module.exports = cors;