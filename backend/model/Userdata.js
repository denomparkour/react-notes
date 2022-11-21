const mongoose = require('mongoose')

const userdata = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {collection: "user-data-list"})

module.exports =  mongoose.model("userdata", userdata)