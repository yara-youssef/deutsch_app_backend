
const Word = require('../models/word.model.js');

const getWords = async (req, res) => {
    try {
        const words = await Word.find({});
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getWord = async (req, res) => {
    try {
        const { id } = req.params;
        const word = await Word.findById(id);
        res.status(200).json(word);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getFilteredWords = async (req, res) => {
    try {
        console.log('ssssss')
        const { filter } = req.query;
        // Assuming 'filter' contains your filter criteria
        const words = await Word.find(filter);
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createWord = async (req, res) => {
    try {
        const word = await Word.create(req.body);
        res.status(200).json(word);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


const updateWord = async (req, res) => {
    try {
        const { id } = req.params;
        const word = await Word.findByIdAndUpdate(id, req.body);

        if (!word) {
            return res.status(404).json({ message: "Product not found!" });
        }
        const updatedWord = await Word.findById(id);
        res.status(200).json(updatedWord);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};



const deleteWord = async (req, res) => {
    try {
        const { id } = req.params;
        const word = await Word.findByIdAndDelete(id);

        if (!word) {
            return res.status(404).json({ message: "Word not found!" });
        }

        res.status(200).json({ message: "Word deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = {
    getWords,
    getWord,
    createWord,
    updateWord,
    deleteWord,
    getFilteredWords
}