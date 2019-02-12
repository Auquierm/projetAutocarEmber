const Mongoose = require('mongoose');
const UserModel = require('./../models/user.model');
let Schema = Mongoose.Schema;

// let langues = ['français', 'anglais', 'neerlandais', 'allemand'];

let schema = new Schema({
    uniqueField : {
        type : String,
        required : true,
        unique : true
    },
    servicePhone : {
        type : String,
        required: true,
    },
    language : {
        type: String,
        required: true,
        enum: UserModel.langues,
    },
    idUser : {
        type : String,
    }
});

schema.statics.serialize = async function(result) {
    return {'agents' : result }
};

module.exports = Mongoose.model('Agent', schema);