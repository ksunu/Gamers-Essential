const mongoose = require('mongoose')

const Schema = mongoose.Schema

const communitySchema = new Schema({

    title: { type: String },

    brief: {type: String},

    description: { type: String },

    genre: {
        type: String,
        enum: ['ACTION', 'SHOOTER', 'RPG', 'PLATFORMS', 'HORROR']
    },

    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],

    imageProd: { type: String },

    releaseDate: { type: Date, default: Date.now },

    comments: { title: { type: String }, description: { type: String }, rating: { type: Number }, user: {type:Number} }

}, {
    timestamps: true
})

const Community = mongoose.model("Community", communitySchema)
module.exports = Community