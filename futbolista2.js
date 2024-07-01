// futbolista2.js

const futbolista = require('./futbolistas');  

function obtenerFutbolistaAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * futbolista.length);
    return futbolista[indiceAleatorio];
}

module.exports = {
    obtenerFutbolistaAleatorio
};