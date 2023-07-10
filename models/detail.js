const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    default: "",
  },
  contactnumber: {
    type: String,
    required: true,
    default: "",
    max: 10,
  },
  salary: {
    type: String,
    required: true,
    default: "",
  },
  jobtitle: {
    type: String,
    required: true,
    default: ""
  },
});
const Detail = mongoose.model("Detail", detailSchema);
module.exports = Detail;