const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const FavoriteGifSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, 'Gift title is required!']
    }
  },
  {
    timestamps: {}
  }
)

module.exports = {
  FavoriteGifSchema
}
