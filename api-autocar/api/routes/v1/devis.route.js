const Express = require('express');
const DevisController = require(`${process.cwd()}/api/controllers/devis.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(DevisController.findAll)
        .post(DevisController.add)


module.exports = router;