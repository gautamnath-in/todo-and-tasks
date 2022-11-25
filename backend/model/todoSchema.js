const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        unique: true,
    },
    todoItemName: [
        { task: String },
        // { plan: String },//to-test for $set
        
    ]
})

module.exports = mongoose.model('Todomodel', todoSchema);