const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let langues = ['français', 'anglais', 'neerlandais', 'allemand'];

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
        enum: langues,
    },
    idUser : {
        type : String,
    }
});

module.exports = Mongoose.model('Agent', schema);