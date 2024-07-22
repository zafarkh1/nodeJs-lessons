//                               Connecting to mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('Error connecting to DB', err));

//                                Schemas
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tag: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean
})

//                                Models
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'React course',
    author: 'Zafar',
    tag: ['react', 'frontend'],
    isPublished: true,
  })
//                              Saving document
  const result = await course.save();
  console.log(result);
}

//                              Querying documents
async function getCourses() {
  const pageNumber = 2
  const pageSize = 10
  const courses = await Course
    // .find({author: 'Zafar'})
    //                            Comparison operators
    // .find({price: {$gte: 10, $lte: 20}})
    // .find({price: {$in: [10, 15, 20]}})
    //                           Logical operators
    // .find()
    // .or([{author: 'Zafar'}, {isPublished: true}])
    // .and([{ author: 'Zafar' }, {isPublished: true}])
    //                           Regular expression
    // .find({author: /^Zafar/}) // Starts with Zafar
    // .find({author: /Doe/i}) // Ends with Doe and case-insensitive
    .find({author: /.*Zafar.*/i}) // Contains Zafar
    .sort({name: -1})
    // .select({name: 1, tag: 1})
    //                            Counting
    .countDocuments()
    //                            Pagination
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
  // .limit(1)
  console.log(courses)
}

getCourses()

// eq (equal)
// neq (not equal)
// gt (greater than)
// gte (greater than or equal)
// lt (less than)
// lte (less than or equal)
// in
// nin (not in)