const Express = require('express');
const PricingController = require(`${process.cwd()}/api/controllers/pricing.controller`);
const Validate = require('express-validator');

const { listPricings, createPricing, updatePricing} = require('./../../validations/pricing.validation');

const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(
            // authorize(ADMIN), 
            Validate(listPricings), PricingController.findAll)
        .post(/*authorize(ADMIN), */Validate(createPricing), PricingController.add);

router
    .route('/:pricingId')
        .patch(
            // authorize(ADMIN), 
            Validate(updatePricing), PricingController.update);

module.exports = router;