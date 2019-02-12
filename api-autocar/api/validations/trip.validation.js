const Joi = require('joi');

module.exports = {
    // GET /v1/trips
    listQTrips: {
        query: {
            idDevis: Joi.string().required(),
            idUser: Joi.string().required(),
            placeDeparture: Joi.string().required(),
            placeArrival: Joi.string().required(),
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            pax: Joi.number().required(),
            nameDriver: Joi.object().required(),
            autocar: Joi.object().required()
        },
    },
    // POST /v1/trips
    createTrip: {
        body: {
            idDevis: Joi.string().required(),
            idUser: Joi.string().required(),
            placeDeparture: Joi.string().required(),
            placeArrival: Joi.string().required(),
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            pax: Joi.number().required(),
            nameDriver: Joi.object().required(),
            autocar: Joi.object().required()
        },
    },
    // PATCH /v1/trips/:quoteId
    updateTrip: {
        body: {
            idDevis: Joi.string().required(),
            idUser: Joi.string().required(),
            placeDeparture: Joi.string().required(),
            placeArrival: Joi.string().required(),
            dateArrival: Joi.string().required(),
            dateDeparture: Joi.string().required(),
            pax: Joi.number().required(),
            nameDriver: Joi.object().required(),
            autocar: Joi.object().required()
        },
        params: {
            tripId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};