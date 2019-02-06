const Client = require('./../models/client.model');
const User = require('./user.controller');
const generatePassword = require('password-generator');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const clients = await Client.find();
        let data = {'clients' : clients};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const password = generatePassword(12, false);
        const client = new Client(req.body);
        await client.save();
        let data = [
            req.body.firstname,
            req.body.lastname,
            req.body.sexe,
            password,
            req.body.age,
            req.body.email,
            req.body.phone,
            req.body.address.street,
            req.body.address.number,
            req.body.address.zip,
            req.body.address.city,
            req.body.address.country,
            client._id,
            "client"
        ];
        User.add(req, res, next, data);
        res.json(client);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}