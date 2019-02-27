const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;

let status = ["traitement", "attente", "ferme", "refuse", "valide"]

let schema = new Schema({
    idClient: {
        type : Mongoose.Schema.Types.ObjectId,
        ref : 'Client',
        required: true,
    },
    numFolder: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: status
    },
    placeDeparture: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true
        },
    },
    placeArrival: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true
        },
    },
    dateArrival: {
        type: String,
        required: true,
    },
    dateDeparture: {
        type: String,
        required: true,
    },
    totalKm: {
        type: Number,
        required: true,
    },
    pax: {
        type: Number,
        required: true,
    },
    options: {
        type: Array,
    },
    numberDriver: {
        type: Number,
        required: true,
    },
    capacityAutocar: {
        type: Number,
        required: true,
    },
    numberAutocar: {
        type: Number,
        required: true,
    },
    includeIn: {
        type: String,
        required: true,
    },
    notIncludeIn: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    com: {
        type: String,
    },
    dateCreation: {
        type: String,
        required: true,
    }
});

schema.statics.status = status;



module.exports = Mongoose.model('Quote', schema);