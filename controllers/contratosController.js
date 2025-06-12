import contratosRepo from '../repositorios/contratosRepo.js';
//const services = require('../services/index');
import { ApiKeyTest, 
         createOKResponse, 
         createUnAuthResponse,
         createUnprocessableReponse,
         createCreatedResponse } 
from '../services/index.js';
import Response from '../models/Response.js';
import contratosBR from '../businessRules/contratosBusinessRules.js';

const contratosController = {
    getAllContratos() {
        return createOKResponse(contratosRepo.getAllContratos());
    },
    addContrato(apiKey, contrato) {
        if (!ApiKeyTest(apiKey)) {
            return createUnAuthResponse();
        }
        /*
        const respBR = contratosBR.canCreate(contrato);
        if (respBR != 'OK') {
            return services.createUnprocessableReponse(
                respBR);
        }*/
       //let contrato = new Contrato(json.id, json.tipo, json.idTime, json.idJogador, json.inicio, json.fim);
        try{
            contratosBR.canCreate(contrato);
            contratosRepo.addContrato(contrato);
            return createCreatedResponse();

        } catch (error) {
            return createUnprocessableReponse(error.message);
        }
    }
    
}

export default contratosController;

