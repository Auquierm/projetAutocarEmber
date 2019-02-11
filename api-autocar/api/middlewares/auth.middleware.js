const Passport = require('passport'),
      Boom = require('boom'),
      User = require('../models/user.model'),
      ES6Promisify = require('es6-promisify');

const ADMIN = 'agent';
const CLIENT = 'client';
const DRIVER = 'chauffeur';

const _handleJWT = (req, res, next, roles) => async(err, user, info) => {
    const error = err || info;
    const logIn = ES6Promisify.promisify(req.logIn);

    try{
        if(error|| !user) throw error;
        await logIn(user, {session: false});
    }catch(err){
        return next(Boom.forbidden(err.message));
    }

    if(roles === CLIENT || roles === DRIVER){
        if(user.onModel !== 'client' && req.params.userId !== user._id.toString()){
            return next(Boom.forbidden('Forbidden area'));
        }
        if(user.onModel !== 'chauffeur' && req.params.userId !== user._id.toString()){
            return next(Boom.forbidden('Forbidden area'));
        }
    }else if(!roles.includes(user.onModel)){
        return next(Boom.forbidden('Forbidden area'));
    }else if(err || !user){
        return next(Boom.badRequest(err.message));
    }

    req.user = user;
    return next();
};

exports.ADMIN = ADMIN;
exports.CLIENT = CLIENT;
exports.DRIVER = DRIVER;

exports.authorize = (roles = User.onModel) => (req, res, next) => Passport.authenticate('jwt', {session :false}, _handleJWT(req, res, next, roles)) (req, res, next);