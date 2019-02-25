const Joi = require('joi');
const QuoteModel = require('./../models/quote.model');

module.exports = {
    // GET /v1/quotes
    listQuotes: {
        query: {
            idUser: Joi.string().required(),
            numFolder: Joi.number().required(),
            Status: Joi.string().valid(QuoteModel.status).required(),
            placeDeparture: {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            placeArrival: {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            totalKm: Joi.number().required(),
            options : Joi.array().required(),
            pax: Joi.number().required(),
            numberDriver: Joi.number().required(),
            capacityAutocar: Joi.number().required(),
            numberAutocar: Joi.number().required(),
            includeIn: Joi.string().required(),
            notIncludeIn: Joi.string().required(),
            Price: Joi.number().required(),
        },
    },
    // POST /v1/quotes
    createQuote: {
        body: {
            idUser: Joi.string().required(),
            numFolder: Joi.number().required(),
            Status: Joi.string().valid(QuoteModel.status).required(),
            placeDeparture: {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            placeArrival: {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            totalKm: Joi.number().required(),
            options : Joi.array().required(),
            pax: Joi.number().required(),
            numberDriver: Joi.number().required(),
            capacityAutocar: Joi.number().required(),
            numberAutocar: Joi.number().required(),
            includeIn: Joi.string().required(),
            notIncludeIn: Joi.string().required(),
            Price: Joi.number().required(),
        },
    },
    // GET /v1/quotes/:quoteId
    getQuote: {
        params: {
            quoteId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // PATCH /v1/quotes/:quoteId
    updateQuote: {
        body: {
            idUser: Joi.string().required(),
            numFolder: Joi.number().required(),
            Status: Joi.string().valid(QuoteModel.status).required(),
            placeDeparture: {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            placeArrival: {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            totalKm: Joi.number().required(),
            options : Joi.array().required(),
            pax: Joi.number().required(),
            numberDriver: Joi.number().required(),
            capacityAutocar: Joi.number().required(),
            numberAutocar: Joi.number().required(),
            includeIn: Joi.string().required(),
            notIncludeIn: Joi.string().required(),
            Price: Joi.number().required(),
        },
        params: {
            quoteId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // DELETE /v1/quotes/:quoteId
    removeQuote: {
        params: {
            quoteId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};