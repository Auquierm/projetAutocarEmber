const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let status = ["traitement", "attente", "ferme", "refuse", "valide"]

let schema = new Schema({
    idUser : {
        type : String,
        required :true,
    },
    numFolder : {
        type : Number,
        required : true,
    },
    Status : {
        type: String,
        required: true,
        enum: status
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
    totalKm : {
        type : Number,
        required : true,
    },
    pax : {
        type : Number,
        required : true,
    },
    numberDriver : {
        type : Number,
        required : true,
    },
    capacityAutocar : {
        type : Number,
        required : true,
    },
    numberAutocar : {
        type : Number,
        required : true,
    },
    includeIn : {
        type : String, 
        required : true,
    },
    notIncludeIn : {
        type : String,
        required : true,
    },
    Price : {
        type : Number,
        required : true,
    }
});

module.exports = Mongoose.model('Quote', schema);