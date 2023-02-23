const express = require('express')
const { deleteFavouriteGig, favouriteGig } = require('../Controllers/Favourirte')
const { getAllServices, getSearchServices, searchUserServices } = require('../Controllers/GuestPage/GuestPage')
const { auth } = require('../Middlewares/auth')
const route = express.Router()
route.get("/all-services", getAllServices)
route.get("/search-services/:category", getSearchServices)
route.post("/add-to-favourite", auth, favouriteGig)
route.delete("/remove-from-favourite", auth, deleteFavouriteGig)
// get users with url with name parameter give in req.query
// provide name in req.query
route.get("/get-users", auth, searchUserServices)




module.exports = route
