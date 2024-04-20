const mongoose = require('mongoose');

const GrammarTopicSchema = mongoose.Schema({
   
    topic:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: false
    }, 
    content:{
        type: Array,
        required: true
    },
    image:{
        type: String,
        required: false
    },
});

const GrammarTopic = mongoose.model("GrammarTopic", GrammarTopicSchema);

module.exports = GrammarTopic;