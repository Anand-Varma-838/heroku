const mongoose = require('mongoose')
const schema = mongoose.Schema

const dets = new schema({
    fname: String,
    lname: String,
    email: String,
    pass: String
})

const data = mongoose.model('user',dets)

module.exports = data