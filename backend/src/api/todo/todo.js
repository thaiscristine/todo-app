const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.todoSchema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = rest.model('Todo', todoSchema)