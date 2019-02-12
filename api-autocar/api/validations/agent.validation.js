const Joi = require('joi');
const User = require('./../models/user.model');

module.exports = {
    // GET /v1/agents
    listAgents: {
        query: {
            servicePhone : Joi.string().required(),
            language : Joi.string().valid(User.langues).required(),
        },
    },
    // POST /v1/agents
    createAgent: {
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
            servicePhone : Joi.string().required(),
            language : Joi.string().valid(User.langues).required(),
        },
    },
    // GET /v1/agents/:agentId
    getAgent: {
        params: {
            agentId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // PATCH /v1/agents/:agentId
    updateAgent: {
        body: {
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
            servicePhone : Joi.string().required(),
            language : Joi.string().required(),
        },
        params: {
            agentId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // DELETE /v1/agents/:agentId
    removeAgent: {
        params: {
            agentId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};