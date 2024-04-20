const express = require('express');
const GrammarTopic = require('../models/grammar.model.js');
const router = express.Router();
const {    getGrammarTopics, getGrammarTopic, createGrammarTopic, updatedGrammarTopic, deleteGrammarTopic
} = require('../controllers/grammar.controller.js')


// app.get('/api/words', async (req, res) => {
//     try {
//         const words = await Word.find({});
//         res.status(200).json(words);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });

router.get('/', getGrammarTopics);

router.get('/:id', getGrammarTopic);

router.post('/', createGrammarTopic);

router.put('/:id', updatedGrammarTopic);

router.delete('/:id', deleteGrammarTopic);

// router.get('/filterBySource', getFilteredWords);

module.exports = router;