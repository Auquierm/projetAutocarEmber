const Express = require('express'),
      AuthController = require(`${process.cwd()}/api/controllers/auth.controller`),
      Validate = require('express-validator');

// const {login, register, refresh}  = require('./../../validations/auth.validation');

const router = Express.Router();

router
    .route('/register')
        .post(AuthController.register);

router
    .route('/login')
        .post(AuthController.login);

router
    .route('/refresh-token')
        .post(AuthController.refresh);

module.exports = router;