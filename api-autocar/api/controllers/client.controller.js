const Client = require('./../models/client.model');
const User = require('./user.controller');
const UserModel  = require('./../models/user.model');
const generatePassword = require('password-generator');
const Boom = require('boom');

/** 
* GET all clients 
*/
exports.findAll = async (req, res, next) => {
    try{
        const clients = await Client.find();
        return res.json(await Client.serialize(clients));
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
        return res.json(await Client.serialize(client));
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
        console.log(password);
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
        let data = UserModel.bodyData(req, password, client._id, "client");
        User.add(req, res, next, data);
        return res.json(await Client.serialize(client));
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
        return res.json(await Client.serialize(client));
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
        return res.json(await Client.serialize(client));
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}