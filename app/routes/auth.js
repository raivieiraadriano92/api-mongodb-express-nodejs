var express = require('express');
var router  = express.Router();

module.exports = function(app){
    var Controller = app.controllers.auth;

    router.post('/', Controller.auth);

    app.use('/auth', router);
}
