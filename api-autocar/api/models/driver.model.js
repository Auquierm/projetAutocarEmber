const Mongoose = require('mongoose');
const UserModel = require('./../models/user.model');
let Schema = Mongoose.Schema;

let schema = new Schema({
    uniqueField : {
        type : String,
        unique : true,
        required : true,
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
    numPermis : {
        type : String,
        required : true,
    },
    medicalDate : {
        type : String,
        required : true,
    },
    capDate : {
        type : String,
        required : true,
    },
    tripDone : {
        type : Array,
    },
    tripToDo: {
        type : Array,
    },
    surveyNote : {
        type : Number,
    },
    idUser : {
        type : String,
    }
});

module.exports = Mongoose.model('Driver', schema);