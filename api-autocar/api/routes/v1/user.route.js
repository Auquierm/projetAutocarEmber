const Express = require('express'),
      UserController = require(`${process.cwd()}/api/controllers/user.controller`);
      //Validate = require('express-validator');

// const { authorize, LOGGED_USER } = require('../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(/*authorize(LOGGED_USER),*/ UserController.findAll)
        .post(/*authorize(LOGGED_USER),*/ UserController.add)

module.exports = router;