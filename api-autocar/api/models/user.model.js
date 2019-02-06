const Mongoose = require('mongoose'),
      Moment = require('moment-timezone'),
      Jwt = require('jwt-simple'),
      Bcrypt = require('bcrypt'),
      Boom = require('boom');

const { env, jwtSecret, jwtExpirationInterval} = require('../../config/environment.config');

const roles = ['client', 'agent', 'chauffeur'];
const sexes = ['homme', 'femme', 'autre'];

let Schema = Mongoose.Schema;

const schema = new Schema({
    username : {
        type : String, 
        unique : true,
        required : true,
        trim: true
    },
    firstname : {
        type : String,
        required : true,
        trim : true,
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
    },
    sexe : {
        type : String,
        enum : sexes,
    },
    password : {
        type : String, 
        required : true,
        minlength : 6,
        maxlength : 128,
    },
    age : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required: 'You must specify an email',
        unique : true,
        trim: true,
        lowercase: true,
    },
    phone : {
        type : String,
        required: true,
    },
    address : {
        street : {type : String},
        number : {type : String},
        zip : {type : String},
        city : {type : String},
        country : {type : String},
    },
    idRole: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: roles
    }
});


schema.pre('save', async function(next) {
    try{
        if(!this.isModified('password')){
            return next();
        }
        let salt = env === 'staging' ? 1 : 10;
        let hash = await Bcrypt.hash(this.password, salt);
        this.password = hash;
        return next();
    }catch(err){
        next(Boom.badImplementation(err.message))
    }
});

schema.methods.token = function() {
    const payload = {
        iat : Moment().unix(),
        exp : Moment().add(jwtExpirationInterval, 'minutes').unix(),
        sub : this._id
    };
    return Jwt.encode(payload, jwtSecret);
}

schema.methods.passwordMatches = async function(pwd) {
    return await Bcrypt.compare(pwd, this.password);
};

schema.methods.transform = function() {
    const fields = ['firstname', 'lastname', 'sexe', 'age', 'email', 'phone', 'address', 'idRole', 'onModel'];
    const object = {};
    fields.forEach((field)=>{
        object[field] = this[field];
    });
    return object;
};

schema.statics.roles = roles;

schema.statics.get = async function(id) {
    try{
        let user;
        if(!Mongoose.Types.ObjectId.isValid(id)){
            throw Boom.badRequest('ID not valid');
        }

        user = await this.findById(id);

        if(!user) {
            throw Boom.notFound('User not found');
        }
        return user;
    }catch(err) {
        throw Boom.badImplementation(err.message);
    }
};

schema.statics.findAndGenerateToken = async function(options) {
    const { email, password, refreshObject } = options;

    if(!email) throw Boom.badRequest('An email is required to generate a token');
    if(!password) throw Boom.badRequest('A password is required to authorize a token generating');

    const user = await this.findOne({email});

    if(!user) {
        throw Boom.notFound('User not found');
    }else if(await user.passwordMatches(password) === false){
        throw Boom.unauthorized('Password must match to authorize a token generating');
    }else if(refreshObject && refreshObject.userEmail === email && Moment(refreshObject.expires).isBefore()) {
        throw Boom.unauthorized('Invalid refresh token');
    }
    return { user, accessToken : user.token() };
};

schema.statics.checkDuplicateEmail = function(error) {
    if(error.name === 'MongoError' && error.code === 11000){
        return Boom.conflict("Validation error", {
            errors : [{
                field : 'email',
                location: 'body',
                messages: ['"Email" already exists'],
            }]
        });
    }
    return error;
}

module.exports = Mongoose.model('User', schema);

