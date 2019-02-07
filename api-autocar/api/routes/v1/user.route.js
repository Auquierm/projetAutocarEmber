const Express = require('express'),
      UserController = require(`${process.cwd()}/api/controllers/user.controller`);
      //Validate = require('express-validator');

// const { authorize, LOGGED_USER } = require('../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(/*authorize(LOGGED_USER),*/ UserController.findAll)
        .post(/*authorize(LOGGED_USER),*/ UserController.add)

router
    .route('/:userId')
        .get(UserController.findOne)
        .patch(UserController.update)
        .delete(UserController.remove);

module.exports = router;