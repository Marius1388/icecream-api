require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Bodyparser Middleware
app.use(express.json());

mongoose.connect(process.env.DATABASEURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
     }).then(()=> {
        console.log("connected to Db!!!");
     }).catch(err => {
        console.log("ERROR", err.message);
});

app.use('/api/', require('./routes//api/orders'));
app.use("/api/products",require('./routes/api/products'));



const port =  process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server listening on port ${port}`));


