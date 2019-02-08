const Driver = require('./../models/driver.model');
const User = require('./user.controller');
const Boom = require('boom');


/** 
* GET all drivers 
*/
exports.findAll = async (req, res, next) => {
    try{
        const drivers = await Driver.find();
        let data = {'drivers' : drivers};
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
        const driver = await Driver.findById(req.params.driverId);
        return res.json(driver);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}


/** 
* POST driver 
*/
exports.add = async (req, res, next) =>{
    try{
        const driver = new Driver({
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
        await driver.save();
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
            driver._id,
            "chauffeur"
        ];
        User.add(req, res, next, data);
        res.json(driver);
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
        const driver = await Driver.findByIdAndUpdate(req.params.driverId, req.body, {new : true});
        let data = driver.idUser;
        User.update(req, res, next, data);
        return res.json(driver);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* PATCH idUser 
*/
exports.updateUserID = async(req, res, next, driverID, userID) =>{
    try {
        await Driver.findByIdAndUpdate(driverID, {idUser : userID},{new : true});
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* DELETE chauffeur 
*/
exports.remove = async (req, res, next) =>{
    try {
        const driver = await Driver.findByIdAndDelete(req.params.driverId);
        let data = driver.idUser;
        User.remove(req, res, next, data);
        return res.json(driver);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}