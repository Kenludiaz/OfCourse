const express = require('express');
const ejs = require('ejs');
const mongoose = require("mongoose");

const app = express();
const port = ( process.env.PORT || 5000);

app.set('view engine', 'ejs');

let mongodb = "mongodb+srv://Ken:Ken@cluster0.lcalo.mongodb.net/?retryWrites=true&w=majority"



app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Listening at port ${port}.`)
})

app.get('/', (req, res) => {
    console.log("Redirecting to home.")
    res.redirect('/home')
})

app.get('/home', async (req, res) => {
    try {
        res.render('pages/index');
    }
    catch(e) {
        throw new Error ("ERROR");    }
})

