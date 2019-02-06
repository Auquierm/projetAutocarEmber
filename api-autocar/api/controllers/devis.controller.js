const Devis = require('./../models/devis.model');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const devis = await Devis.find();
        let data = {'devis' : devis};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const devis = new Devis(req.body);
        await devis.save();
        res.json(devis);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
