const Mongoose = require('mongoose');
const UserModel = require('./../models/user.model');
let Schema = Mongoose.Schema;

let schema = new Schema({
    uniqueField: {
        type: String,
        required: true,
        unique: true
    },
    servicePhone: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: UserModel.langues,
    },
    idUser: {
        type: String,
    }
});

module.exports = Mongoose.model('Agent', schema);