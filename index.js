const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Word = require('./models/word.model.js');
const wordRoute = require('./routes/word.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/words", wordRoute);





const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://yaranyoussef:08VYM8Po4e3eAphD@deutschbackend.hbq2ms0.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected!');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch(() => {

    });