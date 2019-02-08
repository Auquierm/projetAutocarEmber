const Quote = require('./../models/quote.model');
const Boom = require('boom');

/** 
* GET all quotes
*/
exports.findAll = async (req, res, next) => {
    try{
        const quotes = await Quote.find();
        let data = {'quotes' : quotes};
        return res.json(data);
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
        return res.json(quote);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* POST one quote 
*/
exports.add = async (req, res, next) =>{
    try{
        const quotes = new Quote(req.body);
        await quotes.save();
        res.json(quotes);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
