const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const flightSchema = new Schema({
//     airline: String,
//     airport: String,
//     flightNo: Number,
//     departs: Date
// });

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        enum: [],
        default: () => Date.now() + 1,
    },
});












module.exports = mongoose.model('Flight', flightSchema);