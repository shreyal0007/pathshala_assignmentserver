const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const UserDetail = require("./models/detail");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

const connectDb = function () {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

};

connectDb();
app.use(express.json());
app.use(cors("http://localhost:3001"));
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port no ${PORT}!!!!!!`);
});
