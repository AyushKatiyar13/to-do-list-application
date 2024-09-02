// mongodb+srv://AjayDB:YwXANyxS4MRjo1SR@cluster0.5hwbihm.mongodb.net/todos

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://AjayDB:YwXANyxS4MRjo1SR@cluster0.5hwbihm.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };

