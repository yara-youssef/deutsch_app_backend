const express = require('express');
const Word = require('../models/word.model.js');
const router = express.Router();
const { getWords, getWord, createWord, updateWord, deleteWord, getFilteredWords  } = require('../controllers/word.controller.js')


// app.get('/api/words', async (req, res) => {
//     try {
//         const words = await Word.find({});
//         res.status(200).json(words);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });

router.get('/', getWords);

router.get('/:id', getWord);

router.post('/', createWord);

router.put('/:id', updateWord);

router.delete('/:id', deleteWord);

router.get('/filterBySource', getFilteredWords);

module.exports = router;