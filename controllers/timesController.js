import timesRepo from '../repositorios/timesRepo.js';

import time_jogadorRepo from '../repositorios/time_JogadorRepo.js';
import jogadoresRepo from '../repositorios/jogadoresRepo.js';
import {ApiKeyTest, createCreatedResponse, createOKResponse, createUnAuthResponse,createUnprocessableReponse}  from '../services/index.js';

import firestoreServices from '../services/firestore.js';
import oracleServices from '../services/oracleServices.js';


let services;
    services = firestoreServices;

const timesController = {
    getTimeById(id) {
        return timesRepo.getTimeById(id);
    },
    async getAllTimes(apiKey) {
        if (ApiKeyTest(apiKey)) {
        //let times = timesRepo.getAllTimes();
        
        let times = [];
        times = await services.getAllTimes();
        
        //let resposta = new Response(200,times,'OK');
        return createOKResponse(times);
        } else {
            return createUnAuthResponse();
        }
    },

    getJogadoresTime(apiKey, idTime) {
        if (ApiKeyTest(apiKey)) {
            let jogs = time_jogadorRepo.getJogadoresTime(idTime);
            let jogadores = [];    
            jogs.forEach(id => {
                jogadores.push(
                    jogadoresRepo.getJogadorById(id)
                );
            });
            let resposta = createOKResponse(jogadores);
            //new Response(200,jogadores,'OK');
            return resposta;
        } else {
            return createUnAuthResponse(); 
            //new Response(403,undefined,'Não Autorizado')
        }
    },



    addTime(time) {
        timesRepo.addTime(time);
    }
}

export default timesController;

