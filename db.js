// mongodb+srv://jutika:<password>@cluster0.rk4ej.mongodb.net/test

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jutika:test123@cluster0.rk4ej.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});
