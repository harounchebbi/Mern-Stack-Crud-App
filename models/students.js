const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  enrollnumber: {
    type: Number,
    min: 1,
    max: 120
  }
});

module.exports = mongoose.model('students', studentSchema);



