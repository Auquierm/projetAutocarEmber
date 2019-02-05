const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;


let schema = new Schema({
    adresseFacturation : {
        street : {
            type : String,
            required : true
        },
        number : {
            type : String,
            required : true
        },
        zip : {
            type : String,
            required : true,
        },
        city : {
            type : String,
            required : true,
        },
        country : {
            type : String,
            required : true
        },
    },
    numTva : {
        type : String,
    },
    numFax : {
        type : Number,
    },
    societe : {
        type : String,
    },
    numBank : {
        type : String,
    }
});

module.exports = Mongoose.model('Client', schema);