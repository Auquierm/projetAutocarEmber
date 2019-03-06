const Express = require('express');
const DriverController = require(`${process.cwd()}/api/controllers/driver.controller`);
const Validate = require('express-validator');

const { listDrivers, createDriver, getDriver, updateDriver, removeDriver } = require('./../../validations/driver.validation');

const {authorize, ADMIN, DRIVER} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize([ADMIN, DRIVER]),Validate(listDrivers), DriverController.findAll)
        .post(authorize([ADMIN, DRIVER]),Validate(createDriver), DriverController.add)

router
    .route('/:driverId')
        .get(authorize([ADMIN, DRIVER]),Validate(getDriver), DriverController.findOne)
        .patch(Validate(updateDriver), DriverController.update)
        .delete(Validate(removeDriver), DriverController.remove);

module.exports = router;