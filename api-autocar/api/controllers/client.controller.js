const Client = require('./../models/client.model');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const clients = await Client.find();
        // let data = {'clients' : clients};
        return res.json(clients);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const client = new Client(req.body);
        await client.save();
        return res.json(client);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}
