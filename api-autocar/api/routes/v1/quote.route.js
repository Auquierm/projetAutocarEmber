const Express = require('express');
const QuoteController = require(`${process.cwd()}/api/controllers/quote.controller`);
const Validate = require('express-validator');

const { listQuotes, createQuote, getQuote, updateQuote, removeQuote } = require('./../../validations/quote.validation');

const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), Validate(listQuotes), QuoteController.findAll)
        .post(Validate(createQuote), QuoteController.add)

router
    .route('/:quoteId')
        .get(authorize(ADMIN), Validate(getQuote), QuoteController.findOne)
        .patch(authorize(ADMIN), Validate(updateQuote), QuoteController.update)
        .delete(authorize(ADMIN), Validate(removeQuote), QuoteController.remove)


module.exports = router;