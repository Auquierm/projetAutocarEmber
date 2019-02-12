const Joi = require('joi');

module.exports = {
    // GET /v1/surveys
    listSurveys: {
        query: {
            idDossier: Joi.string().required(),
            stateBeforeTrip: Joi.string().required(),
            stateAfterTrip: Joi.string().required(),
            appreciationUser: Joi.string().required(),
            appreciationDriver: Joi.string().required(),
            appreciationGlobal: Joi.string().required(),
        },
    },
    // POST /v1/surveys
    createSurvey: {
        body: {
            idDossier: Joi.string().required(),
            stateBeforeTrip: Joi.string().required(),
            stateAfterTrip: Joi.string().required(),
            appreciationUser: Joi.string().required(),
            appreciationDriver: Joi.string().required(),
            appreciationGlobal: Joi.string().required(),
        },
    },
};