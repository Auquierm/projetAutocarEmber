const Express = require('express'),
      UserController = require(`${process.cwd()}/api/controllers/user.controller`);
      //Validate = require('express-validator');

const router = Express.Router();

router
    .route('/')
        .get(UserController.findAll)
        .post(UserController.add)

module.exports = router;