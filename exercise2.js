const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected'))
.catch((err) => console.log(err));

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

async function getCourses () {
  return Course
    .find({isPublished: true, tags: {$in: ['frontend', 'backend']}})
    .sort({price: -1})
    .select({name: 1, author: 1})
}

getCourses().then((courses) => {console.log(courses)})