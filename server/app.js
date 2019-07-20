const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();
app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/:restaurant_id', express.static(path.join(__dirname, '/../public/')));

 const serverOne = 'http://13.57.252.210',
       serverTwo = 'http://54.200.32.135',
       serverThree = 'http://18.219.221.244',
       serverFour = 'http://18.223.115.5';

app.all("/:restaurant_ID/images", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/:restaurant_id/reservations/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: serverTwo});
});

app.all("/:restaurant_id/menus", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: serverThree});
});

app.all("/:restaurantID/reviews", function(req, res) {
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {target: serverFour});
});

app.all("/:restaurantID/reviews/*", function(req, res) {
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {target: serverFour});
});

module.exports = app;