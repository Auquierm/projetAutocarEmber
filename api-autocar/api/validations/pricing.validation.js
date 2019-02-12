const Joi = require('joi');

module.exports = {
    // GET /v1/pricings
    listPricings: {
        query: {
            priceKms: Joi.number().required(),
            vat: Joi.number().required(),
            priceOneCar: Joi.number().required(),
            capacity: {
                car1: Joi.number().required(),
                car2: Joi.number().required(),
                car3: Joi.number().required()
            },
            margin: {
                margin1: Joi.number().required(),
                margin2: Joi.number().required(),
                margin3: Joi.number().required()
            },
            priceDriver: {
                oneDriver: Joi.number().required(),
                moreThenOneDriver: Joi.number().required()
            },
            tollFee: Joi.number().required(),
            season: {
                haute: Joi.number().required(),
                normal: Joi.number().required(),
                basse: Joi.number().required()
            },
            options: {
                wc: Joi.number().required(),
                remorque: Joi.number().required(),
                tv: Joi.number().required(),
                wifi: Joi.number().required()
            },
            divers: {
                other: Joi.number().required()
            },
        },
    },
    // POST /v1/pricings
    createPricing: {
        body: {
            priceKms: Joi.number().required(),
            vat: Joi.number().required(),
            priceOneCar: Joi.number().required(),
            capacity: {
                car1: Joi.number().required(),
                car2: Joi.number().required(),
                car3: Joi.number().required()
            },
            margin: {
                margin1: Joi.number().required(),
                margin2: Joi.number().required(),
                margin3: Joi.number().required()
            },
            priceDriver: {
                oneDriver: Joi.number().required(),
                moreThenOneDriver: Joi.number().required()
            },
            tollFee: Joi.number().required(),
            season: {
                haute: Joi.number().required(),
                normal: Joi.number().required(),
                basse: Joi.number().required()
            },
            options: {
                wc: Joi.number().required(),
                remorque: Joi.number().required(),
                tv: Joi.number().required(),
                wifi: Joi.number().required()
            },
            divers: {
                other: Joi.number().required()
            },
        },
    },
    // PATCH /v1/pricings/:driverId
    updatePricing: {
        body: {
            priceKms: Joi.number().required(),
            vat: Joi.number().required(),
            priceOneCar: Joi.number().required(),
            capacity: {
                car1: Joi.number().required(),
                car2: Joi.number().required(),
                car3: Joi.number().required()
            },
            margin: {
                margin1: Joi.number().required(),
                margin2: Joi.number().required(),
                margin3: Joi.number().required()
            },
            priceDriver: {
                oneDriver: Joi.number().required(),
                moreThenOneDriver: Joi.number().required()
            },
            tollFee: Joi.number().required(),
            season: {
                haute: Joi.number().required(),
                normal: Joi.number().required(),
                basse: Joi.number().required()
            },
            options: {
                wc: Joi.number().required(),
                remorque: Joi.number().required(),
                tv: Joi.number().required(),
                wifi: Joi.number().required()
            },
            divers: {
                other: Joi.number().required()
            },
        },
        params: {
            driverId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};