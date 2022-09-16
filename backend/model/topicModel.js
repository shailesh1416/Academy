const mongoose = require('mongoose')

const TopicSchema = mongoose.Schema({
    course : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true,"Please add course for topic"],
        ref : 'Course',
    },
    name : {
        type : String,
        required : [true,"Please add a topic name"]
    },
    description :{
        type : String,
        required : [true,"Please add some description about the topic"]
    }
},
{
    timestamps:true,
}
)

module.exports = mongoose.model('Topics', topicSchema)