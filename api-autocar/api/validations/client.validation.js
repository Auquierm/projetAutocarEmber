const Joi = require('joi');
const User = require('./../models/user.model');

module.exports = {
    // GET /v1/clients
    listClients: {
        query: {
            adresseFacturation: {
              street: Joi.string().required(),
              number: Joi.string().required(),
              zip: Joi.string().required(),
              city: Joi.string().required(),
              country: Joi.string().required()
            },
            numTva: Joi.string().required(),
            numFax: Joi.number().required(),
            societe: Joi.string().required(),
            numBank: Joi.string().required(),
        },
    },
    // POST /v1/clients
    createClient: {
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
            adresseFacturation: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
              },
            numTva: Joi.string().required(),
            numFax: Joi.number().required(),
            societe: Joi.string().required(),
            numBank: Joi.string().required(),
        },
    },
    // GET /v1/clients/:clientId
    getClient: {
        params: {
            clientId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // PATCH /v1/clients/:clientId
    updateClient: {
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
            adresseFacturation: {
                street: Joi.string().required(),
                number: Joi.string().required(),
                zip: Joi.string().required(),
                city: Joi.string().required(),
                country: Joi.string().required()
              },
            numTva: Joi.string().required(),
            numFax: Joi.number().required(),
            societe: Joi.string().required(),
            numBank: Joi.string().required(),
        },
        params: {
            clientId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // DELETE /v1/clients/:clientId
    removeClient: {
        params: {
            clientId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};