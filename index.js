const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const tokensRouter = require("./routers/tokens.router")
const dataRouter = require("./routers/data.router")
const bodyParser = require("body-parser");
const swagger = require("swagger-ui-express")
const swaggerjsdoc = require("swagger-jsdoc")
//const swaggerdoc = require("./swagger/swaggerdoc.json")


const PORT = process.env.PORT || 8000


const swaggerDefinition = {
    openapi: '3.0.0',
  info: {
    title: 'Pathfinder API for digital trace',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:8000',
      description: 'Development server',
    },
  ],
  };
  
  const options = {
    swaggerDefinition,
    apis: ['./routers/*.js'],
  };

  const swaggerSpec = swaggerjsdoc(options);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(tokensRouter)
app.use(dataRouter)
app.use('/api-docs', swagger.serve, swagger.setup(swaggerSpec))






app.listen(PORT, () => {console.log(`Listening ${PORT}`)});