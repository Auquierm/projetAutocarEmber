const Joi = require('joi');
const User = require('./../models/user.model');

module.exports = {
    // GET /v1/users
    listUsers: {
        query: {
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
            idUser : Joi.string().required(),
            onModel: Joi.string().valid(User.roles),
        },
    },
    // POST /v1/users
    createUser: {
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
            idUser : Joi.string().required(),
            onModel: Joi.string().valid(User.roles),
        },
    },
    // GET /v1/users/:userId
    getUser: {
        params: {
            userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
    // PATCH /v1/users/:userId
    updateUser: {
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
            }
        },
        params: {
            userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
        },
    },
};