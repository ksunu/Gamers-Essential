const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')
const Community = require('./../models/Community.model')
const Event = require('./../models/Event.model')

// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


// COMMUNITY FAV
router.post('/addFavCommunity/:id', (req, res, next) => {

    User.findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, { $push: { favCommunity: req.params.id } }))
            .then(response => res.json(response))
            .catch(err => next(err))
})

// EVENT FAV
router.post('/addFavEvent/:id', (req, res, next) => {

    User.findOne(req.user)
        .then(user => User.findByIdAndUpdate(user._id, { $push: { favEvent: req.params.id } }))
            .then(response => res.json(response))
            .catch(err => next(err))
})

router.get('/getAllProfile', (req, res, next) => {

    User.findOne(req.user)
        .then(user => User.findById(user._id)
            .populate('favCommunity')
            .populate('favEvent')
            .then(response => res.json(response)))
        .catch(err => next(err))

})



module.exports = router


