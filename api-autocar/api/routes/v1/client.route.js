const Express = require('express');
const ClientController = require(`${process.cwd()}/api/controllers/client.controller`);

const {authorize, ADMIN, CLIENT} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize([CLIENT, ADMIN]), ClientController.findAll)
        .post(ClientController.add)

router
    .route('/:clientId')
        .get(authorize([CLIENT, ADMIN]), ClientController.findOne)
        .patch(authorize([CLIENT, ADMIN]), ClientController.update)
        .delete(authorize([CLIENT, ADMIN]), ClientController.remove);


module.exports = router;