const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    idDevis : {
        type : String,
        required : true,
    },
    idUser  : {
        type : String,
        required : true,
    },
    placeDeparture : {
        type : String,
        required : true,
    },
    placeArrival : {
        type : String,
        required : true,
    },
    dateArrival : {
        type : Date,
        required : true,
    },
    dateDeparture :{
        type : Date,
        required  :true,
    },
    pax : {
        type : Number,
        required : true,
    },
    nameDriver : {
        type : Object,
        required : true,
    },
    autocar : {
        type : Object,
        required : true,
    }
});

module.exports = Mongoose.model('Trip', schema);