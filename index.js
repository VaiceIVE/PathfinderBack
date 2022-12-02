const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const tokensRouter = require("./routers/tokens.router")
const dataRouter = require("./routers/data.router")

const PORT = process.env.PORT || 8000



const app = express();





app.use('/api', tokensRouter)
app.use('/api', dataRouter)






app.listen(PORT, () => {console.log(`Listening ${PORT}`)});