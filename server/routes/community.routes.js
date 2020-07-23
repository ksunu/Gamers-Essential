const express = require('express')
const router = express.Router()

const Community = require('./../models/Community.model')
const User = require('./../models/User.model')

// ***END POINTS***

// COMMUNITY 
router.get('/getAllCommunity', (req, res, next) => {
    Community.find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
})

// ONE COMMUNITY
router.get('/getOneCommunity/:community_id', (req, res, next) => {

    Community.findById(req.params.community_id)
        
        .then(response => res.json(response))
        .catch(err => next(err))
})

// NEW COMMUNITY
router.post('/newCommunity', (req, res, next) => {

    const { title, brief, description, genre, imageProd } = req.body


    Community.create({ title, brief, description, genre, imageProd, owner: req.user })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// EDIT COMMUNITY
router.put('/editCommunity/:community_id', (req, res, next) => {

    const { title, description, genre, imageProd, comments } = req.body

    Community.findByIdAndUpdate(req.params.community_id, { title, description, genre, imageProd, comments }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// DELETE COMMUNITY
router.delete('/deleteCommunity/:community_id', (req, res, next) => {

    Community.findByIdAndDelete(req.params.community_id)
    .then(response => res.json(response))
    .catch(err => next(err))

})

// INSERT COMMUNITY COMMENTS
router.post('/newComment/:id', (req, res, next) => {

    const { comments } = req.body

    Community.findByIdAndUpdate(req.params.id, { $push: { comments: comments } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})



// **EXPORT**
module.exports = router