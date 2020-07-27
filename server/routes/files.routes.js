// CLOUDINARYCONFIG
const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary.config')


// COMMUNITY
router.post('/uploadCommunity', uploader.single("imageProd"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'))
        return
    }

    res.json({ secure_url: req.file.secure_url })
})

// // EVENT
// router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

//     if (!req.file) {
//         next(new Error('No file uploaded!'))
//         return
//     }

//     res.json({ secure_url: req.file.secure_url })
// })


// // PROFILE
// router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

//     if (!req.file) {
//         next(new Error('No file uploaded!'))
//         return
//     }

//     res.json({ secure_url: req.file.secure_url })
// })

module.exports = router