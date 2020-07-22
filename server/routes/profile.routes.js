const express = require('express')
const router = express.Router()

const User = require('./../models/User.model')

router.get('/addFavCommunity/:id', (req,res,next) => {

    User.findByIdAndUpdate(req.user, { $push: { favCommunity: req.params.id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))

})


module.exports = router


