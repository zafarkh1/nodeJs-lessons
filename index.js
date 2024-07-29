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
    name: 'Piano course',
    author: 'Nigora',
    tag: ['instrument', 'music'],
    isPublished: false,
  })
//                              Saving document
//   const result = await course.save();
//   console.log(result)
}

// createCourse()

//                              Querying documents
// async function getCourses () {
//   const allCourses = await Course.find()
// }

// async function getCourses () {
//   const courses = await Course
//     .find({author: 'NNU'})
//     .sort({name: -1})  // => .sort('-name')
//     .select({author: 1, tag: 1}) // => .select('author tag')
//     .limit(1)
// }

//                             Comparison operators
// async function getCourses() {
//   // eq (equal)
//   // neq (not equal)
//   // gt (greater than)
//   // gte (greater than or equal)
//   // lt (less than)
//   // lte (less than or equal)
//   // in
//   // nin (not in)
//   const courses = await Course
//     // .find({price: 10})
//     // .find({price: {$gt: 10, $lte: 20}})
//     .find({price: {$in: [10, 15, 20]}})
// }

//                           Logical operators
// async function getCourses() {
//   const courses = await Course
//     .find()
//     .or([{author: 'Zafar'}, {isPublished: true}])
//     .and([{author: 'NNU'}, {isPublished: false}])
// }

//                            Regular expression
// async function getCourses () {
//   const courses = await Course
//     // .find({author: /ˆZafar/i}) // Starts with Zafar and case-insensitive
//     // .find({author: /Zafar$/i}) // Ends with Zafar and case-insensitive
//     .find({author: /.*nnu.*/i}) // Contains Zafar and case-insensitive
// }

//                           Counting
// async function getCourses () {
//   const courses = await Course
//     .find({author: 'NNU'})
//     .countDocuments()
// }

//                           Pagination
// async function getCourses() {
//   const pageNumber = 2
//   const pageSize = 10
//   const courses = await Course
//     .find()
//     .skip((pageNumber - 1) * pageSize)
//     .limit(pageSize)
// }

//                             Updating a document => Query first
// async function updateCourse(id) {
//   const course = await Course.findById(id)
//   if (!course) return;
//   course.author = 'John';
//
//   const result = await course.save();
//   console.log(result)
// }
//
// updateCourse('66a7297e5eb9a013f42dc286')

//                           Updating a document => Update first
// async function updateCourse(id) {
//   const result = await Course.updateOne({_id: id}, {
//     $set: {
//       author: 'NNU'
//     }
//   })
//   console.log(result)
// }
//
// updateCourse('66a7297e5eb9a013f42dc286')

// async function updateCourse(id) {
//  try {
//    const course = await Course.findByIdAndUpdate(id, {
//      $set: {
//        author: 'Nigora'
//      }
//    }, {new: true})
//    console.log(course)
//  } catch (e) {
//    console.log(e)
//  }
// }
//
// updateCourse('66a7297e5eb9a013f42dc286')

//                          Delete a document
// async function deleteCourse(id) {
//   const result = await Course.deleteOne({_id: id})
//   console.log(result)
// }
//
// deleteCourse('66a7297e5eb9a013f42dc286')