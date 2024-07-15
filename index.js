//                                     Building your first server
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Sam'},
]

app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/api/courses', (req, res) => {
  res.send(courses);
})

//                                       Route parameters
// app.get('/api/courses/:id', (req, res) => {
//   console.log(req.params)
//   res.send(req.params.id)
// })

app.get('/api/courses/:year/:month/:day', (req, res) => {
  res.send(req.params)
})

//                                      Handling HTTP Get request
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) return res.status(404).send("Not Found")
  res.send(course)
})

//                                      Handling HTTP Post request
app.post('/api/courses', (req, res) => {
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
app.put('/api/courses/:id', (req, res) => {
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
app.delete('/api/courses/:id', (req, res) => {
  const course =  courses.find(c => c.id === parseInt(req.params.id))
  if(!course) return res.status(404).send('Course Not Found')

  const index = courses.indexOf(course)
  courses.splice(index, 1)
  res.send(course)
})

//                                     Environment variables
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Listening on port ${port}`));

function validateCourse (course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  })
  return schema.validate(course)
}