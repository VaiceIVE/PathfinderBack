const controller = require("../controllers/data.controller")
const Router = require('express')
const { application } = require("express")
const router = new Router()


/**
 * @swagger
 * /fakedata:
 *   get:
 *     summary: Get a Json list of test output
 *     description: Output of testing gidital trace signature in json format
 *     responses:
 *       200:
 *         description: A list of testing digital traces.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The event ID.
 *                   example: asdlkfg2r3hasdf
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       cardid:
 *                         type: string
 *                         description: The event ID.
 *                         example: 122
 *                       title:
 *                         type: string
 *                         description: The events's name.
 *                         example: Мероприятие 122
 *                       text:
 *                         type: string
 *                         description: The events's description.
 *                         example: 111 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.
 *                       date:
 *                         type: string
 *                         description: The events's date.
 *                         example: 20.11.2022  19:00
 *                       img:
 *                         type: string
 *                         description: The events's image name.
 *                         example: prev.png
*/
router.get('/fakedata', controller.getFakeData)


/**
 * @swagger
 * /data:
 *   post:
 *     summary: Get a Json list of output by token
 *     description: Output of testing gidital trace signature in json format
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token to search for.
 *                 example: asdlkjhgasdk234124kljh1234
 *               requirements:
 *                 type: json
 *                 description: values to compare
 *                 example: {"value": 10}
 *     responses:
 *       200:
 *         description: A list of testing digital traces.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The event ID.
 *                   example: asdlkfg2r3hasdf
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       cardid:
 *                         type: string
 *                         description: The event ID.
 *                         example: 122
 *                       title:
 *                         type: string
 *                         description: The events's name.
 *                         example: Мероприятие 122
 *                       text:
 *                         type: string
 *                         description: The events's description.
 *                         example: 111 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.
 *                       date:
 *                         type: string
 *                         description: The events's date.
 *                         example: 20.11.2022  19:00
 *                       img:
 *                         type: string
 *                         description: The events's image name.
 *                         example: prev.png
*/


router.get('/data/:token', controller.getTokenData)

/**
 * @swagger
 * /data/token:
 *   get:
 *     summary: Get a Json list of output by token
 *     description: Output of testing gidital trace signature in json format
 *     parameters:
 *       - in: body
 *         name: token
 *         required: true
 *         description: Token of data to retrieve.
 *         schema:
 *           type: string
 *         example: as17sdf1g17ds
 *     responses:
 *       200:
 *         description: A list of testing digital traces.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The event ID.
 *                   example: asdlkfg2r3hasdf
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       cardid:
 *                         type: string
 *                         description: The event ID.
 *                         example: 122
 *                       title:
 *                         type: string
 *                         description: The events's name.
 *                         example: Мероприятие 122
 *                       text:
 *                         type: string
 *                         description: The events's description.
 *                         example: 111 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.
 *                       date:
 *                         type: string
 *                         description: The events's date.
 *                         example: 20.11.2022  19:00
 *                       img:
 *                         type: string
 *                         description: The events's image name.
 *                         example: prev.png
*/

router.post('/data', controller.getExactTokenData)


//router.post('/data', controller.postData)


module.exports = router