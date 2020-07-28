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

    User.findByIdAndUpdate(req.body, { $push: { favCommunity: req.params.id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/deleteFavCommunity/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.body, { $pull: { favCommunity: req.params.id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})


// EVENT FAV
router.post('/addFavEvent/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.body, { $push: { favEvent: req.params.id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/deleteFavEvent/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.body, { $pull: { favEvent: req.params.id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})


// GAME FAV
router.post('/addFavGame/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.body, { $push: { favGame: req.params.id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/deleteFavGame/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.body, { $pull: { favGame: req.params.id } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// DRAW PROFILE

router.get('/getAllProfile/:id', (req, res, next) => {


    User.findById(req.params.id)
        .populate('favCommunity')
        .populate('favEvent')
        .then(response => res.json(response))
        .catch(err => next(err))

})


// EDIT AVATAR
router.post('/editAvatar/:user_id', (req, res, next) => {


    User.findByIdAndUpdate(req.params.user_id, { avatar: req.body.avatar })
        .then(response => res.json(response))
        .catch(err => next(err))
})





module.exports = router


