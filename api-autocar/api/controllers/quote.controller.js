const Quote = require('./../models/quote.model');
const Client = require('./../controllers/client.controller');
const DateQuote = require('./../services/dateCreationQuote.service');
const Boom = require('boom');

/** 
* GET all quotes
*/
exports.findAll = async (req, res, next) => {
    try {
        const quotes = await Quote.find();
        return res.json(quotes);
    } catch (err) {
        next(Boom.badImplementation(err));
    }
};

/** 
* GET one quote 
*/
exports.findOne = async (req, res, next) => {
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
exports.add = async (req, res, next) => {
    try {
        console.log(req.body.dateArrival);
        console.log(req.body.dateDeparture);
        const numberOfQuote = await Quote.find();
        let numForFolder = (numberOfQuote.length) + 1;
        const quote = await new Quote({
            numFolder: numForFolder,
            placeDeparture: {
                street: req.body.placeDeparture.street,
                number: req.body.placeDeparture.number,
                zip: req.body.placeDeparture.zip,
                city: req.body.placeDeparture.city,
                country: req.body.placeDeparture.country
            },
            placeArrival: {
                street: req.body.placeArrival.street,
                number: req.body.placeArrival.number,
                zip: req.body.placeArrival.zip,
                city: req.body.placeArrival.city,
                country: req.body.placeArrival.country
            },
            dateArrival: req.body.dateArrival,
            dateDeparture: req.body.dateDeparture,
            pax: req.body.pax,
            options: req.body.options,
            capacityAutocar: req.body.capacityAutocar,
            status: req.body.status,
            totalKm: 0,
            numberDriver: 0,
            numberAutocar: 0,
            includeIn: ' ',
            notIncludeIn: ' ',
            price: 0,
            com: req.body.com,
            idClient: req.body.idClient,
            dateCreation: DateQuote.createDateQuote(),
        });
        await quote.save();
        await Client.updateIdQuotes(req, res, next, req.body.idClient, quote._id);
        return res.json(quote);
    } catch (err) {
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}

/** 
* PATCH quote 
*/
exports.update = async (req, res, next) => {
    try {
        const quote = await Quote.findByIdAndUpdate(req.params.quoteId, req.body, { new: true });
        return res.json(quote);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}

/** 
* DELETE quote 
*/
exports.remove = async (req, res, next) => {
    try {
        const quote = await Quote.findByIdAndDelete(req.params.quoteId)
        return res.json(quote);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}