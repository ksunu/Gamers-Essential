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
router.get('/editCommunity/:community_id', (req, res, next) => {

   Community.findById(req.params.community_id)
         .then(response => res.json(response))
         .catch(err => next(err))
})

router.post('/getOneCommunity/:community_id/editCommunity',  (req.res, next) => {

    Community.findByIdAndUpdate()

}


// **EXPORT**
module.exports = router