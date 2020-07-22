const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')

// Logged in checker middleware
const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

// Role checker middleware
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


router.post('/addFavCommunity/:id', checkAuthenticated, (req, res, next) => {

    User.findByIdAndUpdate(req.user, { $push: { favCommunity: req.params.id } }, { new: true })
    .then(response => console.log(response))
        // .then(response => res.json(response))
        // .catch(err => next(err))

})


module.exports = router


