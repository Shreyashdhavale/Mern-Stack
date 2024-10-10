const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/todoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  Item: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
