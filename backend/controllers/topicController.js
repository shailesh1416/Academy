const asyncHandler= require('express-async-handler')

const Topic = require('../model/topicModel')
// @desc Get Topic
// @route GET
// @access public

const getTopic = asyncHandler( async(req,res)=>{
    const topic = await Topic.find()
    res.status(200).json(topic)
})


// @desc Post Topic
// @route POST
// @access public

const setTopic = asyncHandler( async(req,res)=>{
    if (!req.body.name || !req.body.price || !req.body.description){
        res.status(400)
        throw new Error("Please add a field")
    }

    const topic = await Topic.create({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        discount : req.body.discount
    })
    res.status(200).json(topic)
    // throw new Error('Please add a text ')

})

// @desc Update Topic
// @route Put
// @access public

const updateTopic = asyncHandler( async(req,res)=>{
    const topic = await Topic.findById(req.params.id)
    if (!topic){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedTopic = await Topic.findOneAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        })
    res.status(200).json(updatedTopic)
})
// @desc Delete Topic
// @route DELETE
// @access public

const deleteTopic = asyncHandler( async(req,res)=>{
    const topic = await Topic.findById(req.params.id)
    if (!topic){
        res.status(400)
        throw new Error('Goal not found')
    }
    await topic.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getTopic,
    updateTopic,
    deleteTopic,
    setTopic
}