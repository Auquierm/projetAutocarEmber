const Passport = require('passport'),
      Boom = require('boom'),
      User = require('../models/user.model'),
      ES6Promisify = require('es6-promisify');

const ADMIN = 'Agent';
const LOGGED_USER = '_loggedUser';

const _handleJWT = (req, res, next, roles) => async(err, user, info) => {
    const error = err || info;
    const logIn = ES6Promisify.promisify(req.logIn);

    try{
        if(error|| !user) throw error;
        await logIn(user, {session: false});
    }catch(err){
        return next(Boom.forbidden(e.message));
    }

    if(roles === LOGGED_USER){
        if(user.role !== 'Agent' && req.params.userId !== user._id.toString()){
            return next(Boom.forbidden('Forbidden area'));
        }
    }else if(!roles.includes(user.role)){
        return next(Boom.forbidden('Forbidden area'));
    }else if(err || !user){
        return next(Boom.badRequest(err.message));
    }

    req.user = user;
    return next();
};

exports.ADMIN = ADMIN;
exports.LOGGED_USER = LOGGED_USER;

exports.authorize = (roles = User.roles) => (req, res, next) => Passport.authenticate('jwt', {session :false}, _handleJWT(req, res, next, roles)) (req, res, next);