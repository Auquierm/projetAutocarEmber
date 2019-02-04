const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    name : {
        type :String,
    }
});

module.exports = Mongoose.model('Client', schema);