const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    word:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    translation:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: false
    }, 
    example_de:{
        type: String,
        required: false
    },
    example_en:{
        type: String,
        required: false
    },
    past_tense:{
        type: String,
        required: false
    },
    perfect_tense:{
        type: String,
        required: false
    },
    plural:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    },
    source:{
        type: String,
        required: false
    },
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;