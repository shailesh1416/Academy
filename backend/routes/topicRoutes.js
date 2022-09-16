const  express = require('express')
const router = express.Router()

const {getTopic, setTopic,updateTopic,deleteTopic} = require('../controllers/topicController')

router.route('/').get(getTopic).post(setTopic)

router.route('/:id').put(updateTopic).delete(deleteTopic)

module.exports = router