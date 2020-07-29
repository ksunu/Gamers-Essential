const mongoose = require('mongoose')

const Schema = mongoose.Schema

const communitySchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    brief: {
        type: String,
        maxlength: 140,
        message: 'Maximum characters'
    },


    description: {
        type: String,
        maxlenght: 1000
    },

    genre: {
        type: String,
        enum: ['ACTION', 'SHOOTER', 'RPG', 'PLATFORMS', 'HORROR', 'ADVENTURE', 'STRATEGY', 'FIGHTING', 'SPORTS'],
        default: 'ACTION',
        required: true
    },

    owner: { type: Schema.Types.ObjectId, ref: "User" },

    imageProd: { type: String },

    comments: {
        type: [String],
        maxlength: 140
    },

    commentsUser: {
        type: [String],
        minlength: 5,
        maxlength: 15
    }

}, {
    timestamps: true
})

const Community = mongoose.model("Community", communitySchema)
module.exports = Community