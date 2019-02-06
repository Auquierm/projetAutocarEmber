const Voyage = require('./../models/voyage.model');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const voyages = await Voyage.find();
        let data = {'voyages' : voyages};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const voyage = new Voyage(req.body);
        await voyage.save();
        res.json(voyage);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
