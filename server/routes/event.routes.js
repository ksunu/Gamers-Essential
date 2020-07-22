const express = require('express')
const router = express.Router()

const Event = require('./../models/Event.model')

// ***END POINTS***
// EVENTS 
router.get('/getAllEvent', (req, res, next) => {

    Event.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

// ONE EVENT
router.get('/getOneEvent/:event_id', (req, res, next) => {

    Event.findById(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// NEW EVENT
router.post('/newEvent', (req, res, next) => {

    Event.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// EDIT EVENT
router.post('/editEvent/:event_id', (req, res, next) => {

    const { title, description, brief, genre, imageEvent, eventDate, comments, locationName } = req.body

    Event.findByIdAndUpdate(req.params.event_id, { title, description, genre, imageEvent, eventDate, comments, locationName }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// INSERT COMMUNITY COMMENTS
router.post('/newComment', (req, res, next) => {

    Event.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// DELETE EVENT
router.get('/deleteEvent/:event_id', (req, res, next) => {

    Event.findByIdAndDelete(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// router.post('/editComment/:event_id', (req, res, next) => {

//     const { title, description, rating, user } = req.body

//     Event.findByIdAndUpdate(req.params.community_id, { comment: { title: title },  { description: description }, { rating: rating }, { user: user } }, { new: true })
//     .then(response => res.json(response))
//     .catch(err => next(err))
// })


// **EXPORT**
module.exports = router