const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    name: { type: String },
    avatar: {
        type: String,
        default: "https://www.eleganciadospuntocero.com/wp-content/uploads/2013/03/Huevo-twitter-avatar.jpg"
    },
    
    role: {
        type: String,
        enum: ['ADMIN', 'MEMBER'],
        default: 'MEMBER'
    },

    favCommunity: [{ type: Schema.Types.ObjectId, ref: 'Community' }],

    favGame: { type: [Number] },
    
    favEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User