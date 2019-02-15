const HttpStatus = require('http-status'),
      User = require('./../models/user.model'),
      RefreshToken = require('../models/refresh-token.model'),
      TokenGen =require('../models/tokengeneration.model'),
      UpdatePassword = require('../services/updateChangedPassword.service'),
      Moment = require('moment-timezone');

const {jwtExpirationInterval} = require('./../../config/environment.config');

/**
* Build a token response and return it
*
* @param {Object} user
* @param {String} accessToken
*
* @returns A formated object with tokens
*
* @private
*/
const _generateTokenResponse = function(user, accessToken) {
    const tokenType = 'Bearer';
    const refreshToken = RefreshToken.generate(user);
    const expiresIn = Moment().add(jwtExpirationInterval, 'minutes');
    return { tokenType, accessToken, refreshToken, expiresIn};
}

/**
 * Create and save a new user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * 
 * @return JWT|next
 * 
 * @public
 */
exports.register = async (req, res, next) =>{
    try{
        const user = await (new User(req.body)).save();
        const token = _generateTokenResponse(user, user.token());
        res.status(HttpStatus.CREATED);
        return res.json({token, user:user.transform()});
    }catch(err){
        return next(User.checkDuplicateEmail(err));
    }
};


/**
 * Connect user if valid username and password is provided
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * 
 * @return JWT|next
 * 
 * @public
 */
exports.login = async (req, res, next) =>{
    try{
        const {accessToken}  = await User.findAndGenerateToken(req.body);
        // const token = _generateTokenResponse(user, accessToken);
        return res.json({accessToken});
    }catch(err){
        console.log(err);
        return next(err);
    }
}

/**
 * Refresh JWT token by RefreshToken removing, and re-creating 
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * 
 * @return JWT|next
 * 
 * @public
 */
exports.refresh = async (req, res, next) =>{
    try{
        const {email, password, refreshToken} = req.body;
        console.log(req.body);
        const refreshObject = await RefreshToken.findOneAndRemove({
            userEmail : email,
            token : refreshToken,
        });
        const {user, accessToken} = await User.findAndGenerateToken({email, password, refreshObject});
        const response = _generateTokenResponse(user, accessToken);
        return res.json(response);
    }catch(err){
        return next(err);
    }
};


/**
 * Create JWT token for the first connection of a client
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * 
 * @return JWT|next
 * 
 * @public
 */
exports.createJwtClient = async(req, res, next) =>{
    console.log(req.body);
    try {
        const token = await TokenGen.findUserId(req.body.token);
        const emailUser = await User.findOne({ _id : token.userId });
        await RefreshToken.findOneAndRemove({
            userEmail : emailUser.email,
        });
        const {user, accessToken} = await User.findAndGenerateTokenFirstConnectClient({email : emailUser.email});
        const response = _generateTokenResponse(user, accessToken);
        UpdatePassword.updateUsedToken(token._id);


        return res.json(response);
    } catch (err) {
        return next(err);
    }
};