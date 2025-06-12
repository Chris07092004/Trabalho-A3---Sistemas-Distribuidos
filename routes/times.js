import express from 'express';
var router = express.Router();

//const timesRepo = require('../repositorios/timesRepo')
import timesController from '../controllers/timesController.js';
import firestoreServices from '../services/firestore.js';
import { validaJWT } from '../services/index.js';


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let token = req.get('Authorization');
  if (token) {
    token = token.slice(7);
  }
  validaJWT(token)
  .then((payload)=> console.log('payload', payload))
  .catch((err)=> console.log('erro:', err))
  let response = await timesController.getAllTimes(req.get('api_key'));
  res.status(response.code).json(response.payload);

});

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

router.post('/', function(req, res, next) {
  //timesController.addTime(req.body);
  firestoreServices.saveTime(req.body);
  res.send('ok');
});



export default router;
