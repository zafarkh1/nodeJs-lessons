const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const courseSchema = {
  author: String,
  name: String,
  tag: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
  price: Number,
  _v: Number
}

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const exercise = await Course
    .find()
    .sort({name: 1})
    .select({name: 1, author: 1})
  console.log(exercise)
}


getCourses()