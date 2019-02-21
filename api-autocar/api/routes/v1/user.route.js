const Express = require('express'),
    UserController = require(`${process.cwd()}/api/controllers/user.controller`);
Validate = require('express-validator');

const { authorize, ADMIN, CLIENT, CHAUFFEUR } = require('./../../middlewares/auth.middleware');
const { listUsers, createUser, getUser, updateUser, removeUser } = require('./../../validations/user.validation');

const router = Express.Router();

router
    .route('/')
    .get(/*authorize(ADMIN),*/  Validate(listUsers), UserController.findAll)
    .post(Validate(createUser), UserController.add);

router
    .route('/:userId')
    .get(/*authorize([ADMIN, CLIENT, CHAUFFEUR]),*/ Validate(getUser), UserController.findOne)
<<<<<<< HEAD
    .patch(/*authorize([ADMIN, CLIENT]),*/ Validate(updateUser), UserController.update)
=======
    .patch(/*authorize([ADMIN, CLIENT]), Validate(updateUser),*/ UserController.update)
>>>>>>> c1837bcc4c37d9ea0a4b5d90b4af65f5f0605bf6
    .delete(authorize([ADMIN, CLIENT]), Validate(removeUser), UserController.remove);

module.exports = router;