const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    avatar: { type: String },
    role: {
        type: String,
        enum: ['ADMIN', 'MEMBER'],
        default: 'MEMBER'
    },
    favCommunity: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Community'
     }],
    favGame: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    favEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    myComments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User