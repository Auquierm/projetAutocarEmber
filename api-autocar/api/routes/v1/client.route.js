const Express = require('express');
const ClientController = require(`${process.cwd()}/api/controllers/client.controller`);
const Validate = require('express-validator');

const { authorize, ADMIN, CLIENT } = require('./../../middlewares/auth.middleware');
const { listClients, createClient, getClient, updateClient, removeClient } = require('./../../validations/client.validation');

const router = Express.Router();

router
    .route('/')
    .get(/*authorize(ADMIN),*/ Validate(listClients), ClientController.findAll)
    .post(Validate(createClient), ClientController.add)

router
    .route('/:clientId')
<<<<<<< HEAD
    .get(
        // authorize([CLIENT, ADMIN]), 
        Validate(getClient), ClientController.findOne)
    .patch(
        // authorize([CLIENT, ADMIN]),
         Validate(updateClient), ClientController.update)
    .delete(
        // authorize([CLIENT, ADMIN]), 
        Validate(removeClient), ClientController.remove);
=======
    .get(/*authorize([CLIENT, ADMIN]),*/ Validate(getClient), ClientController.findOne)
    .patch(/*authorize([CLIENT, ADMIN]),*/ Validate(updateClient), ClientController.update)
    .delete(authorize([CLIENT, ADMIN]), Validate(removeClient), ClientController.remove);
>>>>>>> f2b1a3416b6434e95515b6e5b0dea8be1e731ddf


module.exports = router;