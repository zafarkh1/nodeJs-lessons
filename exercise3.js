const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected'))
.catch((err) => console.log(err))

const courseSchema = {
  name: String,
  author: String,
  tag: [String],
  date: {type: Date},
  isPublished: Boolean,
  price: Number,
  _v: Number
}

const Course = mongoose.model('Course', courseSchema)

async function getCourses () {
  return Course
    .find()
    .or([{price: {$gte: 15}}, {name: /.*by.*/i}])
}

getCourses().then((courses) => {console.log(courses)})