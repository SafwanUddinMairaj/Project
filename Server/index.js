const express = require('express')
const app = express()
const PORT = 3050;
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/sampledb')
.then(()=>{console.log(`DB Connected!`)})
.catch((err)=>{console.log(err)});

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT,()=>{console.log("Server is running")});