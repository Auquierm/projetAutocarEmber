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
    }
});

module.exports = Mongoose.model('Agent', schema);