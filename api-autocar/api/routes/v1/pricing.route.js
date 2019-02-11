const Express = require('express');
const PricingController = require(`${process.cwd()}/api/controllers/pricing.controller`);

const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), PricingController.findAll)
        .post(/*authorize(ADMIN), */PricingController.add);

router
    .route('/:pricingId')
        .patch(authorize(ADMIN), PricingController.update);

module.exports = router;