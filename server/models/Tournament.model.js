const mongoose = require('mongoose')

const Schema = mongoose.Schema

const communitySchema = new Schema({

    title: { type: String },

    genre: {
        type: String,
        enum: ['ACTION', 'SHOOTER', 'RPG', 'PLATFORMS', 'HORROR']
    },

    description: { type: String },

    owner: { type: Schema.Types.ObjectId, ref: "User" },

    imageEvent: { type: String },

    eventDate: { type: Date, default: Date.now },

    locationName: { type: String },

    coordinates: { type: [Number], required: true },

    comments: { type: String }

}, {
    timestamps: true
})

const Tournament = mongoose.model("Tournament", communitySchema)
module.exports = Tournament