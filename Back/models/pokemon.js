const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create pokemon Schema & model
const PokemonSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Id field is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    description: {
        type: String,
        default: 'No description'
    },
    type:{type: String, default:'normal'},
    starter: {
        type: Boolean,
        default: false
    }
});

const Pokemon = mongoose.model('pokemon', PokemonSchema);

module.exports = Pokemon;
