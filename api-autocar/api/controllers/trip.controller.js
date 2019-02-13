const Trip = require('./../models/trip.model');
const Boom = require('boom');

/** 
* GET all trips 
*/
exports.findAll = async (req, res, next) => {
    try{
        const trips = await Trip.find();
        return res.json(trips);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

/** 
* POST one trip 
*/
exports.add = async (req, res, next) =>{
    try{
        const trip = new Trip(req.body);
        await trip.save();
        return res.json(trip);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}

/** 
* PATCH trip 
*/
exports.update = async (req, res, next) =>{
    try {
        const trip = await Trip.findByIdAndUpdate(req.params.tripId, req.body, {new : true});
        return res.json(trip);
    } catch (err) {
        next(Boom.badImplementation(err.message));
    }
}
