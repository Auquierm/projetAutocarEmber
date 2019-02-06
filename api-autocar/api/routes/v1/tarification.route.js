const Express = require('express');
const TarificationController = require(`${process.cwd()}/api/controllers/tarification.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(TarificationController.findAll)
        .post(TarificationController.add)


module.exports = router;