const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const courseSchema = {
  name: String,
  author: String,
  tag: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
  price: Number,
  _v: Number
}

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const courses = await Course
    .find()
    .or([{price: {$gte: 15}}, {name: /.*by.*/i}])
  console.log(courses)
}

getCourses()