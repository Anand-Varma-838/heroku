const https = require('http');
const parser = require('body-parser');
const express = require('express');
const data = require('./models/schema')
const request = require("request");
const path = require('path');
const { json } = require('express');
const mongoose = require('mongoose')
const assert = require('assert')
const app = express();
const connectDB = require('./db/connect')
const port = process.env.PORT || 3000

app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'public')))

connectDB('mongodb+srv://archapelo:test@stige-final.j4skr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.get('/', function(req, res){
  let url = req.url
  console.log(url)
  res.sendFile(__dirname + '/public/login.html');
});


app.post('/', async function(req,res){
  let email = req.body.email
  let pass = req.body.pass
  let url = req.url
  console.log(url)
  if(email === '' || pass === ''){
    res.status(400).send('Please Provide Valid Credentials')
  }
  else{
      xt = ''
      data.find({email: `${email}`},(err,dat)=>{
          if(dat.length===0){
              window.alert('Email does not exist')
              
          }
          
          else{
              console.log(dat)
              data.find({email:`${email}`},{password:`${pass}`},(err,dat)=>{
                  console.log(dat)
                  if(dat.length===0) window.alert('Incorrect Password')
                  location = '/public/dashboard.html'
                  xt = 'true'
              })
          }
      })
      console.log(document.URL)
  }
  
})



app.listen(port, function () {
    console.log('Node app is working!');
  });