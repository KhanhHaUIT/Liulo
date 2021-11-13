const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Liulo API',
    description: '',
  },
  host: 'localhost:5000',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    Authorization: {
      type: 'apiKey',
      name: 'Authorization',
      description: 'Value: Bearer ',
      in: 'header',
      scheme: 'bearer',
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);
