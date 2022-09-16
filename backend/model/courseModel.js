const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please add a course name"]
    },
    price : {
        type :Number,
        required : [true,"Please add a price for course"]
    },
    description :{
        type : String,
        required : [true,"Please add some description about the course"]
    },
    discount:{
        type:Number,
        require:false
    }
},
{
    timestamps:true,
}
)

module.exports = mongoose.model('Courses', courseSchema)