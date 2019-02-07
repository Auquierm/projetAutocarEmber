const Client = require('./../models/client.model');
const User = require('./user.controller');
const generatePassword = require('password-generator');
const Boom = require('boom');

/** 
* GET all clients 
*/
exports.findAll = async (req, res, next) => {
    try{
        const clients = await Client.find();
        let data = {'clients' : clients};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

/** 
* GET one client 
*/
exports.findOne = async (req, res, next) =>{
    try{
        const client = await Client.findById(req.params.clientId);
        return res.json(client);
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}

/** 
* POST client 
*/
exports.add = async (req, res, next) =>{
    try{
        const password = generatePassword(12, false);
        const client = new Client({
            uniqueField  : req.body.firstname+req.body.lastname+req.body.email,
            adresseFacturation : {
                street : req.body.adresseFacturation.street,
                number : req.body.adresseFacturation.number,
                zip : req.body.adresseFacturation.zip,
                city : req.body.adresseFacturation.city,
                country : req.body.adresseFacturation.country,
            },
            numTva : req.body.numTva,
            numFax : req.body.numFax,
            societe : req.body.societe,
            numBank : req.body.numBank
            
        });
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

/** 
* PATCH client 
*/
exports.update = async (req, res, next) =>{
    try{
        const client = await Client.findByIdAndUpdate(req.params.clientId, req.body, {new : true});
        let data = client.idUser;
        User.update(req, res, next, data);
        return res.json(client);
    }catch(err){
        console.log(err);
        next(Boom.badImplementation(err.message));
    }
}
/** 
* PATCH idUser 
*/
exports.updateUserID = async(req, res, next, clientID, userID) =>{
    try{
        await Client.findByIdAndUpdate(clientID, {idUser : userID}, {new : true});
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}

/** 
* DELETE client  
*/
exports.remove = async (req, res, next) =>{
    try{
        const client = await Client.findByIdAndDelete(req.params.clientId);
        let data = client.idUser;
        User.remove(req, res, next, data);
        return res.json(client);
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}