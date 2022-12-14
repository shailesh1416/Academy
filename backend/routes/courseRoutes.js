const  express = require('express')
const router = express.Router()

const {getCourses, setCourses,updateCourses,deleteCourses} = require('../controllers/courseController')

router.route('/').get(getCourses).post(setCourses)

router.route('/:id').put(updateCourses).delete(deleteCourses)

module.exports = router