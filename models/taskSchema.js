const mongoose = require('mongoose')
const schema = mongoose.Schema

const tasks = new schema({
    email: String,
    desc: String,
    complete: String,
    deadline: Date
})

const dat = mongoose.model('task',tasks)

module.exports = dat