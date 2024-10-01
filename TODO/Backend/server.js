const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./db"); 

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get("/todos", async (req, res) => {
  try {
    const todos = await User.find();
    res.status(200).json(todos); 
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send("Error fetching todos");
  }
});

app.post("/add", async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new User({ Item: todo });
    await newTodo.save(); 
    console.log("Element Added:", todo);
    res.status(200).json(newTodo); 
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).send("Error adding todo");
  }
});

app.delete("/remove/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id); 
    res.status(200).json({ message: "Todo Removed Successfully!" });
  } catch (error) {
    console.error("Error removing todo:", error);
    res.status(500).send("Error removing todo");
  }
});

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});
