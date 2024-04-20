
const GrammarTopic = require('../models/grammar.model.js');

const getGrammarTopics = async (req, res) => {
    try {
        const grammarTopics = await GrammarTopic.find({});
        res.status(200).json(grammarTopics);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getGrammarTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const grammarTopic = await GrammarTopic.findById(id);
        res.status(200).json(grammarTopic);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const createGrammarTopic = async (req, res) => {
    try {
        const grammarTopic = await GrammarTopic.create(req.body);
        res.status(200).json(grammarTopic);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


const updatedGrammarTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const grammarTopic = await GrammarTopic.findByIdAndUpdate(id, req.body);

        if (!grammarTopic) {
            return res.status(404).json({ message: "Product not found!" });
        }
        const updatedGrammarTopic = await GrammarTopic.findById(id);
        res.status(200).json(updatedGrammarTopic);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const deleteGrammarTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const grammarTopic = await GrammarTopic.findByIdAndDelete(id);

        if (!grammarTopic) {
            return res.status(404).json({ message: "Topic not found!" });
        }

        res.status(200).json({ message: "Topic deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = {
    getGrammarTopics, getGrammarTopic, createGrammarTopic, updatedGrammarTopic, deleteGrammarTopic
}