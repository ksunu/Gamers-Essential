const mongoose = require("mongoose")

const Schema = mongoose.Schema

const locationSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  coords: {
    lat: {
      type: Number,
      required: true
    },

    lng: {
      type: Number,
      required: true,
    }
  }
}, {
  timestamps: true,
}
)

const Location = mongoose.model("Location", locationSchema)

module.exports = Location