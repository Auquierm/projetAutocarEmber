const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let schema = new Schema({
    idDossier : {
        type : String,
        required : true,
    },
    stateBeforeTrip : {
        type : String,
        required : true,
    },
    stateAfterTrip : {
        type : String,
        required : true,
    },
    appreciationUser : {
        type : String,
        required : true,
    },
    appreciationDriver : {
        type : String,
        required : true,
    },
    appreciationGlobal : {
        type : String,
        required : true,
    }
});

schema.statics.serialize = async function(result) {
    return {'surveys' : result }
};

module.exports = Mongoose.model('Survey', schema);