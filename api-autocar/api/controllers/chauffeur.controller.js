const Chauffeur = require('./../models/chauffeur.model');
const User = require('./user.controller');
const Boom = require('boom');


/** 
* GET all drivers 
*/
exports.findAll = async (req, res, next) => {
    try{
        const chauffeurs = await Chauffeur.find();
        let data = {'chauffeurs' : chauffeurs};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

/** 
* GET one driver 
*/
exports.findOne = async (req, res, next) =>{
    try {
        const chauffeur = await Chauffeur.findById(req.params.chauffeurId);
        return res.json(chauffeur);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}


/** 
* POST driver 
*/
exports.add = async (req, res, next) =>{
    try{
        const chauffeur = new Chauffeur({
            uniqueField : req.body.firstname+req.body.lastname+req.body.email,
            servicePhone : req.body.servicePhone,
            language : req.body.language,
            numPermis : req.body.numPermis,
            medicalDate : req.body.medicalDate,
            capDate : req.body.capDate,
            tripDone : req.body.tripDone,
            tripToDo : req.body.tripToDo,
            surveyNote : req.body.surveyNote
        });
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

/** 
* PATCH chauffeur 
*/
exports.update = async (req, res, next) =>{
    try {
        const chauffeur = await Chauffeur.findByIdAndUpdate(req.params.chauffeurId, req.body, {new : true});
        let data = chauffeur.idUser;
        User.update(req, res, next, data);
        return res.json(chauffeur);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* PATCH idUser 
*/
exports.updateUserID = async(req, res, next, chauffeurID, userID) =>{
    try {
        await Chauffeur.findByIdAndUpdate(chauffeurID, {idUser : userID},{new : true});
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* DELETE chauffeur 
*/
exports.remove = async (req, res, next) =>{
    try {
        const chauffeur = await Chauffeur.findByIdAndDelete(req.params.chauffeurId);
        let data = chauffeur.idUser;
        User.remove(req, res, next, data);
        return res.json(chauffeur);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}