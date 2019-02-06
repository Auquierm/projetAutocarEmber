const Agent = require('./../models/agent.model');
const User = require('./user.controller');
const Boom = require('boom');

exports.findAll = async (req, res, next) => {
    try{
        const agents = await Agent.find();
        let data = {'agents' : agents};
        return res.json(data);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const agent = new Agent(req.body);
        await agent.save();
        let data = [
            req.body.firstname,
            req.body.lastname,
            req.body.sexe,
            req.body.password,
            req.body.age,
            req.body.email,
            req.body.phone,
            req.body.address.street,
            req.body.address.number,
            req.body.address.zip,
            req.body.address.city,
            req.body.address.country,
            agent._id,
            "agent"
        ];
        User.add(req, res, next, data);
        res.json(agent);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
}