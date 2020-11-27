const express= require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const api = require('./api.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
api.setup(app);

const puerto = process.env.PORT || 5000;
//app.use('/api', api);
const swaggerOptions = {
     swaggerDefinition: {
         info: {
             title: 'Mi node',
             description: 'Descripcio node',
             contact: {
                 name: "Toni"
             },
            servers: ["https://localhost:"+puerto]
         }
     },
     apis: ["api.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(puerto, () => {
    console.log('El servidor está inicializado en el puerto '+puerto);
});

//app.listen(process.env.PORT);


