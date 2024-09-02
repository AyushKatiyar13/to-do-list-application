// mongodb+srv://AjayDB:YwXANyxS4MRjo1SR@cluster0.5hwbihm.mongodb.net/todos

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ayush13:TrdbizvZKZs1CkGK@cluster0.gg8p0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };

