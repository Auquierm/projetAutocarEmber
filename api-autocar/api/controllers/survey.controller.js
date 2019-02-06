const Survey = require('./../models/survey.model');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const surveys = await Survey.find();
        let data = {'surveys' : surveys};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const survey = new Survey(req.body);
        await survey.save();
        res.json(survey);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
