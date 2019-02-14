const Agent = require('./../models/agent.model');
const User = require('./user.controller');
const UserModel = require('./../models/user.model');
const Boom = require('boom');

/**
 * GET all agents
 */
exports.findAll = async (req, res, next) => {
    try{
        const agents = await Agent.find();
        return res.json(agents);
    }catch(err){
        next(Boom.badImplementation(err));
    }
};


/** 
* GET one agent 
*/
exports.findOne = async (req, res, next) =>{
    try{
        const agent = await Agent.findById(req.params.agentId);
        return res.json(agent);
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}

/** 
* POST agent 
*/
exports.add = async (req, res, next) =>{
    try{
        const agent = new Agent({
            uniqueField : req.body.firstname+req.body.lastname+req.body.email,
            language : req.body.language,
            servicePhone : req.body.servicePhone
        });
        await agent.save();
        let data = UserModel.bodyData(req, null, agent._id, "agent");
        User.add(req, res, next, data);
        return res.json(agent);
    }catch(err){
        console.log(err.message);
        next(Boom.badImplementation(err.message));
    }
};

/** 
* PATCH agent 
*/

exports.update = async (req, res, next) =>{
    try{
        const agent = await Agent.findByIdAndUpdate(req.params.agentId, req.body, {new : true});
        let data = agent.idUser;
        User.update(req, res, next, data);
        return res.json(agent);
    }catch(err){
        console.log(err)
        next( Boom.badImplementation(err.message));
    }
};

/** 
* PATCH idUser 
*/
exports.updateUserID = async(req, res, next, agentID, userID) =>{
    try{
        await Agent.findByIdAndUpdate(agentID, {idUser : userID}, {new : true});
    }catch(err){
        next( Boom.badImplementation(err.message));
    }
}

/** 
* DELETE agent 
*/

exports.remove = async (req, res, next) =>{
    try{
        const agent = await Agent.findByIdAndDelete(req.params.agentId);
        let data = agent.idUser;
        User.remove(req, res, next, data);
        return res.json(agent);
    }catch(err){
        next(Boom.badImplementation(err.message));
    }
}