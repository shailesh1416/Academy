const asyncHandler= require('express-async-handler')

// @desc Get Courses
// @route GET
// @access public

const getCourses= asyncHandler( async(req,res)=>{
    res.status(200).json({message:"Get Courses"})
})


// @desc Post Courses
// @route POST
// @access public

const setCourses=asyncHandler( async(req,res)=>{
    if (!req.body.text){
        res.status(400)
        throw new Error("Please ad a field")
    }
    res.status(200).json({message:"Set Course"})
    // throw new Error('Please add a text ')

})

// @desc Update Courses
// @route Put
// @access public

const updateCourses=asyncHandler( async(req,res)=>{
    res.status(200).json({message:`Update Courses ${req.params.id}`})
})
// @desc Delete Courses
// @route DELETE
// @access public

const deleteCourses=asyncHandler( async(req,res)=>{
    res.status(200).json({message:`delete Courses ${req.params.id}`})
})

module.exports = {
    getCourses,
    updateCourses,
    deleteCourses,
    setCourses
}