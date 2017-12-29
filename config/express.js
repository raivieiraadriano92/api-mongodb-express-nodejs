var express      = require('express');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var load         = require('express-load');
var cors         = require('cors');
var mongoose     = require('mongoose');

// var auth = require('./authentication').auth;

module.exports = function(){
    var app = express();

    mongoose.connect('mongodb://mongodb:27017/api')
            .connection.on('connected', function (){
                console.log('Connected mongoose!');
            });

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('middlewares')
        .then('routes')
        .into(app);

    app.use(function(err, req, res, next) {
        res.status(500).send({
            message: 'Ops. Parace que este recurso não esta funcionando corretamente.'
        });
    });

    app.use(function(req, res, next) {
        res.status(404).send({
            message: 'Ops. O recurso que você esta tentando acessar não existe.'
        });
    });

    return app;
}
