const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    priceKms : {
        type : Number,
        required : true,
    },
    vat : {
        type : Number,
        required : true,
    },
    priceOneCar : {
        type : Number,
        required : true,
    },
    capacity : {
        car1 : { type : Number, required : true},
        car2 : { type : Number, required : true },
        car3 : { type : Number, required : true },
    },
    margin : {
        margin1 : { type : Number, required : true },
        margin2 : { type : Number, required : true },
        margin3 : { type : Number, required : true },
    },
    priceDriver : {
        oneDriver : { type : Number, required : true },
        moreThenOneDriver : { type : Number, required : true},
    },
    tollFee : {
        type : Number,
        required : true,
    },
    season : {
        haute : { type : Number, required : true },
        normal : { type : Number, required : true },
        basse : { type : Number, required : true }
    },
    options : {
        wc : { type : Number, required : true },
        remorque : { type : Number, required : true },
        tv : { type : Number, required : true },
        wifi : { type : Number, required : true },
    },
    divers : {
        other : { type : Number, required : true },
    }
});


module.exports = Mongoose.model('Pricing', schema);