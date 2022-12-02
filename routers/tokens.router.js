const controller = require("../controllers/tokens.controller")
const Router = require('express')
const router = new Router()

router.post('/newapp', controller.generateAppToken)





module.exports = router
