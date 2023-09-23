const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dotenv = require('dotenv');
dotenv.config();

const eureka = require('../config/eurekaClient');

const GATEWAY_ADDRESS = process.env.ADDRESS || 'localhost';
const GATEWAY_PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json("I am user-service")
})

app.listen(GATEWAY_PORT, () => {
    console.log(`Gateway running on ${GATEWAY_ADDRESS}:${GATEWAY_PORT}`);
})
  

eureka.registerWithEureka('express-gateway-service', GATEWAY_PORT);