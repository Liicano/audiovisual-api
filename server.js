var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Equipo = require('./api/models/equipoModel'), //Modelos creados
  Usuario = require('./api/models/usuarioModel'),
  jsonwebtoken = require("jsonwebtoken"),
  bodyParser = require('body-parser');
//PASSPORT
var passport = require('passport');
  
// CONEXION A LA BBDD DE MONGO
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Liicano:h7369372@ds019886.mlab.com:19886/inventariodb'); 

// Passport - SESIONES -
app.use(passport.initialize());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CABEZERAS PARA LAS PETICIONES
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header   ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



var routes = require('./api/routes/routes'); //RUTAS CREADAS
routes(app); //register the route


app.listen(port);

//PRUEBA DE CAMMBIO EN GIT

console.log('API INICIADA EN EL PUERTO -> ' + port);
