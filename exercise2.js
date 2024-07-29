const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log('Connected to mongodb!'))
  .catch(err => console.log(err));

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
    // .find({tags: {$in: ['frontend', 'backend']}})
    .find()
    .or([{tags: 'frontend'}, {tags: 'backend'}])
    .sort('-price')
    .select({name: 1, author: 1})
  console.log(courses)
}

getCourses()