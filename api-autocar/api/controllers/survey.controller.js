const Survey = require('./../models/survey.model');
const Boom = require('boom');

/** 
* GET all surveys 
*/
exports.findAll = async (req, res, next) => {
    try{
        const surveys = await Survey.find();
        return res.json(await Survey.serialize(surveys));
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

/** 
* POST survey 
*/
exports.add = async (req, res, next) =>{
    try{
        const survey = new Survey(req.body);
        await survey.save();
        return res.json(await Survey.serialize(survey));
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
