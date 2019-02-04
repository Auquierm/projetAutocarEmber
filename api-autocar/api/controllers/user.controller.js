const User = require('./../models/user.model'),
      HTTPStatus  = require('http-status'),
      Boom = require('boom');

exports.findAll = async (req, res, next) =>{
    try{
        const users = await User.find();
        const transformedUsers = users.map(user => user.transform());
        res.json(transformedUsers);
    }catch(err) {
        next(Boom.badImplementation(err));
    }
};

exports.add = async (req, res, next) =>{
    try{
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(HTTPStatus.CREATED);
        res.json(savedUser.transform());
    }catch(err){
        next(User.checkDuplicateEmail(err));
    }
};