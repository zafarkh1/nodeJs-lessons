const express = require('express');
const router = express.Router();
const Joi = require('joi');

const courses = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Sam'},
]

router.get('/', (req, res) => {
  res.send(courses);
})

                                      // Route parameters
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.get('/:year/:month/:day', (req, res) => {
  res.send(req.params)
})

//                                      Handling HTTP Get request
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) return res.status(404).send("Not Found")
  res.send(course)
})

//                                      Handling HTTP Post request
router.post('/', (req, res) => {
  //                                    Input validation
  const { error } = validateCourse(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // if(!req.body.name || req.body.length < 3) {
  //   res.status(400).send("Name is required and must be at least 3 characters")
  //   return;
  // }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  res.send(course)
})

//                                     Handling HTTP Put request
router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) return res.status(404).send("Course Not Found")

  const { error } = validateCourse(req.body)
  if (error) {
    res.status(400).send(error.details[0].message)
  }

  course.name = req.body.name
  res.send(course)
})

//                                     Handling HTTP Delete request
router.delete('/:id', (req, res) => {
  const course =  courses.find(c => c.id === parseInt(req.params.id))
  if(!course) return res.status(404).send('Course Not Found')

  const index = courses.indexOf(course)
  courses.splice(index, 1)
  res.send(course)
})

function validateCourse (course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  })
  return schema.validate(course)
}

module.exports = router;