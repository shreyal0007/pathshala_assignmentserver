const express = require("express");
const userRouter = express.Router();
const {
  details,
  getUserDetails,
} = require("../controllers/userController");

userRouter.post("/details", details);
userRouter.get("/getuserdetails", getUserDetails);

module.exports = userRouter;
