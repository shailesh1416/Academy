const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please provide student name"]
    },
    gender : {
        type : String,
        required : [true,"Please provide gender"]
    },
    dob : {
        type :Date,
        required : [true,"Please provide date of birth"]
    },
    address :{
        type : String,
        required : [true,"Please provide an address"]
    },
    qualification:{
        type:String,
        require:[true,"Please provide qualification"]
    },
    mobile:{
        type:Number,
        require:[true,"Please provide mobile number"],
        maximum:10,
        minimum:10
    },
},
{
    timestamps:true,
}
)

module.exports = mongoose.model('Students', studentSchema)