const Express = require('express');
const PricingController = require(`${process.cwd()}/api/controllers/pricing.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(PricingController.findAll)
        .post(PricingController.add);

router
    .route('/:pricingId')
        .patch(PricingController.update);

module.exports = router;