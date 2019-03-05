const Joi = require('joi');
const User = require('./../models/user.model');

module.exports = {
    // GET /v1/drivers
    listDrivers: {
        query: {
            servicePhone: Joi.string().required(),
            language: Joi.string().valid(User.langues),
            numPermis: Joi.string().required(),
            medicalDate: Joi.string().required(),
            capDate: Joi.string().required(),
            tripDone: Joi.array(),
            tripToDo: Joi.array(),
            surveyNote: Joi.string().required()
        },
    },
    // POST /v1/drivers
    createDriver: {
        body: {
            username: Joi.string().required(),
            firstname: Joi.string().required(),
            lastname : Joi.string().required(),
            sexe : Joi.string().valid(User.sexes).required(),
            password: Joi.string().min(6).max(128).required(),
            age : Joi.number().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
            address : {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            servicePhone: Joi.string().required(),
            language: Joi.string().valid(User.langues),
            numPermis: Joi.string().required(),
            medicalDate: Joi.string().required(),
            capDate: Joi.string().required(),
            tripDone: Joi.array(),
            tripToDo: Joi.array(),
            surveyNote: Joi.string().required()
        },
    },
    // GET /v1/drivers/:driverId
    getDriver: {
        params: {
            driverId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // PATCH /v1/drivers/:driverId
    updateDriver: {
        body: {
            username: Joi.string().required(),
            firstname: Joi.string().required(),
            lastname : Joi.string().required(),
            sexe : Joi.string().valid(User.sexes).required(),
            password: Joi.string().min(6).max(128).required(),
            age : Joi.number().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
            address : {
                street : Joi.string().required(),
                number : Joi.string().required(),
                zip : Joi.string().required(),
                city : Joi.string().required(),
                country : Joi.string().required()
            },
            servicePhone: Joi.string().required(),
            language: Joi.string().valid(User.langues),
            numPermis: Joi.string().required(),
            medicalDate: Joi.string().required(),
            capDate: Joi.string().required(),
            tripDone: Joi.array(),
            tripToDo: Joi.array(),
            surveyNote: Joi.string().required()
        },
        params: {
            driverId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // DELETE /v1/drivers/:driverId
    removeDriver: {
        params: {
            driverId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};