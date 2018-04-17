const mongoose = require('mongoose')
const Schema = require('../db/schema')

const FavoriteGif = mongoose.model('FavoriteGif', Schema.FavoriteGifSchema)

module.exports = FavoriteGif
