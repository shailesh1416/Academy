const asyncHandler= require('express-async-handler')

const Course = require('../model/courseModel')
// @desc Get Courses
// @route GET
// @access public

const getCourses= asyncHandler( async(req,res)=>{
    const course = await Course.find()
    res.status(200).json(course)
})


// @desc Post Courses
// @route POST
// @access public

const setCourses=asyncHandler( async(req,res)=>{
    if (!req.body.name || !req.body.price || !req.body.description){
        res.status(400)
        throw new Error("Please add a field")
    }

    const course = await Course.create({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        discount : req.body.discount
    })
    res.status(200).json(course)
    // throw new Error('Please add a text ')

})

// @desc Update Courses
// @route Put
// @access public

const updateCourses=asyncHandler( async(req,res)=>{
    const course = await Course.findById(req.params.id)
    if (!course){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedCourse = await Course.findOneAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        })
    res.status(200).json(updatedCourses)
})
// @desc Delete Courses
// @route DELETE
// @access public

const deleteCourses=asyncHandler( async(req,res)=>{
    const course = await Course.findById(req.params.id)
    if (!course){
        res.status(400)
        throw new Error('Goal not found')
    }
    await course.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getCourses,
    updateCourses,
    deleteCourses,
    setCourses
}