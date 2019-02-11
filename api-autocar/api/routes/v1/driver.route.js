const Express = require('express');
const DriverController = require(`${process.cwd()}/api/controllers/driver.controller`);

const {authorize, ADMIN, DRIVER} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize([ADMIN, DRIVER]), DriverController.findAll)
        .post(/*authorize([ADMIN, DRIVER]), */DriverController.add)

router
    .route('/:driverId')
        .get(authorize([ADMIN, DRIVER]), DriverController.findOne)
        .patch(authorize([ADMIN, DRIVER]), DriverController.update)
        .delete(authorize([ADMIN, DRIVER]), DriverController.remove);

module.exports = router;