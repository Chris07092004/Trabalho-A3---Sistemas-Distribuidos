import express from 'express';
var router = express.Router();

//const timesRepo = require('../repositorios/timesRepo')
import jogadoresController 
from '../controllers/jogadoresController.js';

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = jogadoresController.getAllJogadores(req.get('api_key'));
  res.status(response.code).json(response.payload);

});

router.get('/:id', function(req, res, next) {
  //console.log(JogadoresRepo)
  res.json(JogadoresController.getJogadorById( req.params.id));
});

router.post('/', function(req, res, next) {
  JogadoresController.addJogador(req.body);
  res.send('ok');
});


export default router;
