const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises', {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('Error connecting to DB', err));

const courseSchema = {
  name: String,
  author: String,
  tag: [String],
  date: {type: Date},
  isPublished: Boolean,
  price: Number,
  _v: Number
}

const Course = mongoose.model('Course', courseSchema);

async function getCourses () {
  return Course
    .find()
    .sort({name: -1})
    .select({name: 1, author: 1});
}

getCourses().then(r => console.log(r))