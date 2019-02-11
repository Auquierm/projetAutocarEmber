const Express = require('express');
const TripController = require(`${process.cwd()}/api/controllers/trip.controller`);

const {authorize, ADMIN, DRIVER} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize([ADMIN, DRIVER]), TripController.findAll)
        .post(authorize(ADMIN), TripController.add);

router
    .route('/:tripId')
        .patch(authorize(ADMIN), TripController.update);


module.exports = router;