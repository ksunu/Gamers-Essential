const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    genre: {
        type: String,
        enum: ['ACTION', 'SHOOTER', 'RPG', 'PLATFORMS', 'HORROR', 'ADVENTURE', 'STRATEGY', 'FIGHTING', 'SPORTS'],
        default: 'ACTION',
        required: true
    },

    brief: {
        type: String,
        maxlength: 140
    },

    description: {
        type: String,
    maxlenght: 1000},

    owner: { type: Schema.Types.ObjectId, ref: "User" },

    imageEvent: { type: String },

    eventDate: {
        type: Date,
        default: Date.now()
    },


    loc: {
        city: {
            type: String,
            default: 'Madrid'
        },
        coordinates: {type: [Number],
            default: [40.416792, -3.703776]}
    },

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

const Event = mongoose.model("Event", eventSchema)
module.exports = Event


