const Express = require('express');
const DriverController = require(`${process.cwd()}/api/controllers/driver.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(DriverController.findAll)
        .post(DriverController.add)

router
    .route('/:driverId')
        .get(DriverController.findOne)
        .patch(DriverController.update)
        .delete(DriverController.remove);

module.exports = router;