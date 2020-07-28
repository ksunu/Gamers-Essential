const express = require('express')
const router = express.Router()

const Community = require('./../models/Community.model')
const User = require('./../models/User.model')

// ***END POINTS***

// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')

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
router.post('/newCommunity', checkAuthenticated, (req, res, next) => {

    const { title, brief, description, genre, imageProd } = req.body


    Community.create({ title, brief, description, genre, imageProd, owner: req.user })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// EDIT COMMUNITY
router.put('/editCommunity/:community_id', checkAuthenticated, (req, res, next) => {

    const { title, description, genre, imageProd} = req.body

    Community.findByIdAndUpdate(req.params.community_id, { title, description, genre, imageProd}, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// DELETE COMMUNITY
router.delete('/deleteCommunity/:community_id', checkAuthenticated, (req, res, next) => {

    Community.findByIdAndDelete(req.params.community_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

// INSERT COMMUNITY COMMENTS
router.post('/newComment/:id', (req, res, next) => {

    Community.findByIdAndUpdate(req.params.id, { $push: { comments: req.body.comments, commentsUser: req.body.commentsUser } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// DELETE COMMUNITY COMMENTS
router.post('/deleteComment/:id', (req, res, next) => {

    Community.findByIdAndUpdate(req.params.id, { $pop: { comments: 1, commentsUser: 1 } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// **EXPORT**
module.exports = router