const Quote = require('./../models/quote.model');
const Boom = require('boom');

/** 
* GET all quotes
*/
exports.findAll = async (req, res, next) => {
    try{
        const quotes = await Quote.find();
        return res.json(await Quote.serialize(quotes));
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

/** 
* GET one quote 
*/
exports.findOne = async(req, res, next) =>{
    try {
        const quote = await Quote.findById(req.params.quoteId);
        return res.json(await Quote.serialize(quote));
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* POST one quote 
*/
exports.add = async (req, res, next) =>{
    try{
        const quote = new Quote(req.body);
        await quote.save();
        return res.json(await Quote.serialize(quote));
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}

/** 
* PATCH quote 
*/
exports.update = async (req, res, next) =>{
    try {
        const quote = await Quote.findByIdAndUpdate(req.params.quoteId, req.body, {new : true});
        return res.json(await Quote.serialize(quote));
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* DELETE quote 
*/
exports.remove = async (req, res, next) =>{
    try {
        const quote = await Quote.findByIdAndDelete(req.params.quoteId)
        return res.json(await Quote.serialize(quote));
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}