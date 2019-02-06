const Express = require('express');
const VoyageController = require(`${process.cwd()}/api/controllers/voyage.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(VoyageController.findAll)
        .post(VoyageController.add)


module.exports = router;