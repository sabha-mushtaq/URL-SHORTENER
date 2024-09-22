// requiring express
const express = require('express');
// creating router object
const router = express.Router();
const {handlegeneratenewshorturl,redirecttoactualurl,getanalytics} = require('../controller/controllers.js');
router.post('/url',handlegeneratenewshorturl)
router.get('/:shortid',redirecttoactualurl)
router.get('/analytics/:shortid',getanalytics)
module.exports =  router;