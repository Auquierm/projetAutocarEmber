const Express = require('express');
const QuoteController = require(`${process.cwd()}/api/controllers/quote.controller`);

const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), QuoteController.findAll)
        .post(QuoteController.add)

router
    .route('/:quoteId')
        .get(authorize(ADMIN), QuoteController.findOne)
        .patch(authorize(ADMIN), QuoteController.update)
        .delete(authorize(ADMIN), QuoteController.remove)


module.exports = router;