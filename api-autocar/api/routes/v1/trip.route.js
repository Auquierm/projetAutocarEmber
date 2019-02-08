const Express = require('express');
const TripController = require(`${process.cwd()}/api/controllers/trip.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(TripController.findAll)
        .post(TripController.add);

router
    .route('/:tripId')
        .patch(TripController.update);


module.exports = router;