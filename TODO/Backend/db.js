const mongoose = require("mongoose");

mongoose
  .connect("INSERT YOUR DATABASE URL HERE", {
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
