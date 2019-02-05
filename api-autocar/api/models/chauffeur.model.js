const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let langues = ['français', 'anglais', 'neerlandais', 'allemand'];

let schema = new Schema({
    servicePhone : {
        type : String,
        required: true,
    },
    language : {
        type: String,
        required: true,
        enum: langues,
    },
    numPermis : {
        type : String,
        required : true,
    },
    medicalDate : {
        type : Date,
        required : true,
    },
    capDate : {
        type : Date,
        required : true,
    },
    tripDone : {
        type : String
    },
    tripToDo: {
        type : String,
    },
    surveyNote : {
        type : Number,
    }
});

module.exports = Mongoose.model('Chauffeur', schema);