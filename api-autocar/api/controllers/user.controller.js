const User = require('./../models/user.model'),
      Agent = require('./agent.controller'),
      Client = require('./client.controller'),
      Driver = require('./driver.controller'),
      Boom = require('boom'),
      Email = require('./../services/nodemailer.service'),
      TokenGeneration = require('./../models/tokengeneration.model');

/** 
* GET all users 
*/
exports.findAll = async (req, res, next) =>{
    try{
        const users = await User.find();
        const transformedUsers = users.map(user => user.transform());
        return res.json(transformedUsers);
    }catch(err) {
        next(Boom.badImplementation(err));
    }
};

/**  
* GET one user 
*/
exports.findOne = async (req, res, next) =>{
    try{
        const user = await User.findById(req.params.userId);
        return res.json(user.transform());
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}

/** 
* POST user 
*/
exports.add = async (req, res, next, data) =>{
    try{
        const user = new User({
            "username" : data[0]+data[1],
            "firstname" : data[0],
            "lastname" :  data[1],
            "sexe" : data[2],
            "password" : data[3],
            "age" : data[4],
            "email": data[5],
            "phone" : data[6],
            "address" : {
                "street" : data[7],
                "number" : data[8],
                "zip" : data[9],
                "city" : data[10],
                "country" : data[11],
            },
            "idUser": data[12], 
            "onModel": data[13]
        });
        
        await user.save();
        if(data[13]==='agent'){
            Agent.updateUserID(req, res, next, data[12], user._id);
        }else if (data[13]==='client'){
            Client.updateUserID(req, res, next, data[12], user._id);
            const accessToken  = await TokenGeneration.generate(user);
            await Email.nodemailer("creationClient", accessToken);
        }else if (data[13]==='chauffeur'){
            Driver.updateUserID(req, res, next, data[12], user._id);
        }
    }catch(err){
        console.log(err);
        next(User.checkDuplicateEmail(err));
    }
};

/**  
* PATCH user 
*/
exports.update = async (req, res, next, data) =>{
    try{
        await User.findByIdAndUpdate(data, req.body, {override : true, upsert : true, new : true});
    }catch(err){
        console.log(err);
    }
}

/** 
* DELETE USER 
*/

exports.remove = async(req, res, next, data) =>{
    try{
        await User.findByIdAndRemove(data);
    }catch(err){
        next (Boom.badImplementation(err));
    }
}