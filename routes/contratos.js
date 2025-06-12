//var express = require('express');
import express from 'express';

export const rotaContratos = express.Router();

//const timesRepo = require('../repositorios/timesRepo')
import contratosController from '../controllers/contratosController.js';
/* GET users listing. */
rotaContratos.get('/', function(req, res, next) {
  let response = contratosController.getAllContratos(req.get('api_key'));
  res.status(response.code).json(response.payload);

});
/*
router.get('/:id/jogadores', function(req, res, next) {
  let response = timesController
  .getJogadoresTime(req.get('api_key'),
                    req.params.id);
  res.status(response.code).json(response.payload);

});

router.get('/:id', function(req, res, next) {
  //console.log(timesRepo)
  res.json(timesController.getTimeById( req.params.id));
});
*/

rotaContratos.post('/', function(req, res, next) {
  let response = contratosController.addContrato(
    req.get('api_key'),
    req.body
  );

  res.status(response.code).json(response.message);
});



