const Pricing = require('./../models/pricing.model');
const Boom = require('boom');

/** 
* GET all pricings
*/
exports.findAll = async (req, res, next) => {
    try{
        const pricings = await Pricing.find();
        return res.json(await Pricing.serialize(pricings));
    }catch(err){
        next(Boom.badImplementation(err));
    }
};


/** 
* POST pricing
*/
exports.add = async (req, res, next) =>{
    try{
        const pricing = new Pricing(req.body);
        await pricing.save();
        return res.json(await Pricing.serialize(pricing));
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}

/** 
* PATCH pricing 
*/
exports.update = async (req, res, next) =>{
    try {
        const pricing = await Pricing.findByIdAndUpdate(req.params.pricingId, req.body, {new : true});
        return res.json(await Pricing.serialize(pricing));
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}
