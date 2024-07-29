const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('Error connecting to DB', err));

//                                           Validation && built-in validators
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    // match: /pattern/,
    // lowercase: true,
    uppercase: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'piano', 'math']
  },
  author: String,
  tag: {
    isAsync: true,
    type: Array,
    validate: {
      validator: function (v) {
        return new Promise(function (resolve, reject) {
          resolve(v && v.length > 0)
        })
      },
      message: 'A course should have at least one tag.'
    }
  },
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished
    },
    min: 5,
    max: 100,
    get: v => Math.round(v),
    set: v => Math.round(v),
  }
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Math',
    category: 'math',
    author: 'Eshmat',
    tag: ['algorithm'],
    isPublished: false,
    price: 100.099999,
  })

  try {
    const result = await course.save();
    console.log(result)
  } catch (error) {
    for (let field in error.errors) {
      console.log(error.errors[field].message);
    }
  }
}

// createCourse()

// async function deleteCourse(id) {
//   const course = await Course.deleteOne({_id: id})
//   console.log(course)
// }
//
// deleteCourse('66a76fc6fafe2b272e9d125d')

// async function updateCourse(id) {
//   const course = await Course.updateOne({ _id: id }, {
//     $set: {
//       author: 'Toshmat'
//     }
//   }, {new: true})
//   console.log(course)
// }
//
// updateCourse('66a76ff174d89e276d66e2ef')