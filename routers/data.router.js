const controller = require("../controllers/data.controller")
const Router = require('express')
const { application } = require("express")
const router = new Router()

router.get('/fakedata', controller.getFakeData)




module.exports = router