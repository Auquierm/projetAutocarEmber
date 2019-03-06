const Express = require('express');
const TripController = require(`${process.cwd()}/api/controllers/trip.controller`);
const Validate = require('express-validator');

const { listTrips, createTrip, updateTrip } = require('./../../validations/trip.validation');

const {authorize, ADMIN, DRIVER} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(Validate(listTrips), TripController.findAll)
        .post(authorize(ADMIN),Validate(createTrip), TripController.add);

router
    .route('/:tripId')
        .patch(authorize(ADMIN),Validate(updateTrip), TripController.update);


module.exports = router;