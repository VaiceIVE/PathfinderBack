const controller = require("../controllers/data.controller")
const Router = require('express')
const { application } = require("express")
const router = new Router()

router.get('/fakedata', controller.getFakeData)
router.get('/alldata', controller.getAllData)
router.post('/data/:token', controller.getTokenData)
router.post('/data', controller.getExactTokenData)




module.exports = router