const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dotenv = require('dotenv');
dotenv.config();

const eureka = require('../../config/eurekaClient');

const APP_ADDRESS = process.env.ADDRESS || 'localhost';
const APP_PORT = process.env.PORT || 3000;

const MfrsRoutes = require('./routes/manufacturerRoute');
app.use("/manufacturers", MfrsRoutes);

app.listen(GATEWAY_PORT, () => {
    console.log(`App running on ${GATEWAY_ADDRESS}:${GATEWAY_PORT}`);
})
  
eureka.registerWithEureka('manufacturer-service', GATEWAY_PORT);