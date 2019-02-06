const Tarification = require('./../models/tarification.model');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const tarifs = await Tarification.find();
        let data = {'tarifs' : tarifs};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const tarif = new Tarification(req.body);
        await tarif.save();
        res.json(tarif);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
