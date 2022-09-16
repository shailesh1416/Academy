const asyncHandler= require('express-async-handler')

const Student = require('../model/studentModel')
// @desc Get Student
// @route GET
// @access public

const getStudent= asyncHandler( async(req,res)=>{
    const student = await Student.find()
    res.status(200).json(student)
})


// @desc Post Student
// @route POST
// @access public

const setStudent=asyncHandler( async(req,res)=>{
    if (!req.body.name ){
        res.status(400)
        throw new Error("Please add a student field")
    }

    const student = await Student.create({
        name : req.body.name ,
        gender : req.body.gender ,
        dob : req.body.dob,
        address :req.body.address,
        qualification : req.body.qualification,
        mobile : req.body.mobile
    })
    res.status(200).json(student)
    // throw new Error('Please add a text ')

})

// @desc Update Courses
// @route Put
// @access public

const updateStudent=asyncHandler( async(req,res)=>{
    const student = await Student.findById(req.params.id)
    if (!student){
        res.status(400)
        throw new Error('Student not found')
    }
    const updatedStudent = await Student.findOneAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        })
    res.status(200).json(updatedStudent)
})
// @desc Delete Courses
// @route DELETE
// @access public

const deleteStudent=asyncHandler( async(req,res)=>{
    const student = await Student.findById(req.params.id)
    if (!student){
        res.status(400)
        throw new Error('Student not found')
    }
    await student.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getStudent,
    setStudent,
    updateStudent,
    deleteStudent
}