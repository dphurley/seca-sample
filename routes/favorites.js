const express = require('express')
const router = express.Router()

const FavoriteGif = require('../models/FavoriteGif')

router.post('/', async (request, response) => {
  try {
    const newGif = request.body
    const savedGif = await FavoriteGif.create(newGif);

    response.json(savedGif)
  } catch(error) {
    console.log(error)
    console.log('Error adding new favorite gif!!!')
  }

});

router.get('/', async (request, response) => {
  try {
    const favoriteGifs = await FavoriteGif.find({})
    response.json(favoriteGifs)
  } catch(error) {
    console.log(error)
    console.log('Error adding new favorite gif!!!')
  }
})

module.exports = router;
