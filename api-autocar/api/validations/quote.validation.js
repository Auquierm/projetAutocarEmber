const Joi = require('joi');
const QuoteModel = require('./../models/quote.model');

module.exports = {
    // GET /v1/quotes
    listQuotes: {
        query: {
            idClient: Joi.string().required(),
            numFolder: Joi.number().required(),
            status: Joi.string().valid(QuoteModel.status).required(),
            placeDeparture: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
            },
            placeArrival: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
            },
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            totalKm: Joi.number().required(),
            options: Joi.array().required(),
            pax: Joi.number().required(),
            numberDriver: Joi.number().required(),
            capacityAutocar: Joi.number().required(),
            numberAutocar: Joi.number().required(),
            includeIn: Joi.number(),
            notIncludeIn: Joi.number(),
            price: Joi.number(),
            com: Joi.string(),
            dateCreation: Joi.string().required(),
            timeTravel: Joi.number()
        },
    },
    // POST /v1/quotes
    createQuote: {
        body: {
            idClient: Joi.string().required(),
            numFolder: Joi.number().required(),
            status: Joi.string().valid(QuoteModel.status).required(),
            placeDeparture: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
            },
            placeArrival: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
            },
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            totalKm: Joi.number().required(),
            options: Joi.array().required(),
            pax: Joi.number().required(),
            numberDriver: Joi.number().required(),
            capacityAutocar: Joi.number().required(),
            numberAutocar: Joi.number().required(),
            includeIn: Joi.number(),
            notIncludeIn: Joi.number(),
            price: Joi.number(),
            com: Joi.string(),
            dateCreation: Joi.string().required(),
            timeTravel: Joi.number()
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
            idClient: Joi.string().required(),
            numFolder: Joi.number().required(),
            status: Joi.string().valid(QuoteModel.status).required(),
            placeDeparture: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
            },
            placeArrival: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
            },
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            totalKm: Joi.number().required(),
            options: Joi.array().required(),
            pax: Joi.number().required(),
            numberDriver: Joi.number().required(),
            capacityAutocar: Joi.number().required(),
            numberAutocar: Joi.number().required(),
            includeIn: Joi.number(),
            notIncludeIn: Joi.number(),
            price: Joi.number(),
            com: Joi.string(),
            dateCreation: Joi.string().required(),
            timeTravel: Joi.number()
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