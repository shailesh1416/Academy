const  express = require('express')
const router = express.Router()

const {getStudent, setStudent,updateStudent,deleteStudent} = require('../controllers/studentController')

router.route('/').get(getStudent).post(setStudent)

router.route('/:id').put(updateStudent).delete(deleteStudent)

module.exports = router