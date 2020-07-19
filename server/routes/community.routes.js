const express = require('express')
const router = express.Router()

const Community = require('./../models/Community.model')

// ***END POINTS***
// COMMUNITY 
router.get('/getAllCommunity', (req, res, next) => {

    Community.find()
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

    Community.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// EDIT COMMUNITY
router.post('/editCommunity/:community_id', (req, res, next) => {

    const { title, description, genre, imageProd, releaseDate, comments } = req.body

    Community.findByIdAndUpdate(req.params.community_id, { title, description, genre, imageProd, releaseDate, comments }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// INSERT COMMUNITY COMMENTS

router.post('/newComment', (req, res, next) => {

    Community.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/editComment/:community_id', (req, res, next) => {

    const { title, description, genre, imageProd, releaseDate, comments } = req.body

    Community.findByIdAndUpdate(req.params.community_id, { title, description, genre, imageProd, releaseDate, comments }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// **EXPORT**
module.exports = router