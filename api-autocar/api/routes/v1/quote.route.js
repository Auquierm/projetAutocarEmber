const Express = require('express');
const QuoteController = require(`${process.cwd()}/api/controllers/quote.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(QuoteController.findAll)
        .post(QuoteController.add);

router
    .route('/:quoteId')
        .get(QuoteController.findOne);


module.exports = router;