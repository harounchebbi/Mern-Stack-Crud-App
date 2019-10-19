const express = require('express');
const router = express.Router();

// Student model
const Students = require('../models/students');

// @route   GET /api/students/
// @desc    Get all students
// @access  Public
router.get('/', async (req, res) => {
  try {
    const students = await Students.find({});
    res.send({ students })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/students/:id
// @desc    Get a specific student
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send({ student });
  } catch (err) {
    res.status(404).send({ message: 'Student not found!' });
  }
});

// @route   POST /api/students/
// @desc    Create a student
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newStudent = await Students.create({ name: req.body.name, email: req.body.email, enrollnumber: req.body.enrollnumber });
     res.send({ newStudent });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/students/:id
// @desc    Update a student
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The student was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/students/:id
// @desc    Delete a student
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeStudent = await Students.findByIdAndRemove(req.params.id);
     res.send({ message: 'The student was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;