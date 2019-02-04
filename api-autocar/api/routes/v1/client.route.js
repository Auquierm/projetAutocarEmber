const Express = require('express');
const ClientController = require(`${process.cwd()}/api/controllers/client.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(ClientController.findAll)
        .post(ClientController.add)


module.exports = router;