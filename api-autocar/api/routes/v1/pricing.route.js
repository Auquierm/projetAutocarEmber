const Express = require('express');
const PricingController = require(`${process.cwd()}/api/controllers/pricing.controller`);
const Validate = require('express-validator');

const { listPricings, createPricing, updatePricing } = require('./../../validations/pricing.validation');

const { authorize, ADMIN } = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
    .get(Validate(listPricings), PricingController.findAll)
    .post(Validate(createPricing), PricingController.add);

router
    .route('/:pricingId')
    .patch(Validate(updatePricing), PricingController.update);

module.exports = router;