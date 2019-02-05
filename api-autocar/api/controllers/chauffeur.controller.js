const Chauffeur = require('./../models/chauffeur.model');
const User = require('./user.controller');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const chauffeurs = await Agent.find();
        let data = {'chauffeurs' : chauffeurs};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const chauffeur = new Chauffeur(req.body);
        await chauffeur.save();
        let data = [
            req.body.firstname,
            req.body.lastname,
            req.body.sexe,
            req.body.password,
            req.body.age,
            req.body.email,
            req.body.phone,
            req.body.address.street,
            req.body.address.number,
            req.body.address.zip,
            req.body.address.city,
            req.body.address.country,
            chauffeur._id,
            "chauffeur"
        ];
        User.add(req, res, next, data);
        res.json(chauffeur);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}