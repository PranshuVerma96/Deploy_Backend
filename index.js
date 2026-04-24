require('dotenv').config()
const express = require('express')
const app = express()


app.get('/' , (req ,res) =>{
  res.send("hello world")
})

app.get('/twitter' , (req ,res) => {
  res.send('pranshuverma')
})

app.get('/login' , (req , res) => {
  res.send('<h1>Please login at Pransh and code </h1>')
})

app.get('/youtube' , (req , res) => {
  res.send('<h2> Welcome to youtube </h2>')
})

app.listen(process.env.PORT , ()=>{
  console.log(`server is running on ${process.env.PORT}`);
  
})