// mensajes.js

const mensajes = {
    consejos: [
        "Recuerda que no puedes fallar en ser tú mismo (Wayne Dyer)",
        "Siempre es temprano para rendirse (Jorge Álvarez Camacho)",
        "Sólo una cosa convierte en imposible un sueño: el miedo a fracasar (Paulo Coelho)",
        "Lo que haces hoy puede mejorar todos tus mañanas (Ralph Marston)",
        "Las pequeñas acciones de cada día hacen o deshacen el carácter (Oscar Wilde)",
      "No me robes el código zorra (Matias-crypto)",
        "Cáete siete veces y levántate ocho (Proverbio japonés)",
        "Para que los cambios tengan un valor verdadero deben ser consistentes y duraderos (Anthony Robbins)",
        "Nada sucede hasta que algo se mueve (Albert Einstein)",
        "Ser un buen perdedor es aprender cómo ganar (Carl Sandburg)",
        "Todos nuestros sueños pueden hacerse realidad, si tenemos el coraje de perseguirlos (Walt Disney)",
        "Quien se transforma a sí mismo, transforma el mundo (Dalai Lama)",
        "Tu tiempo es limitado, así que no lo malgastes viviendo la vida de alguien más… ten el valor de seguir tu corazón y tu intuición (Steve Jobs)",
        "La mayoría de las personas gastan más tiempo y energías en hablar de los problemas que en afrontarlos (Henry Ford)",
        "No es que tengamos poco tiempo, es que perdemos mucho (Séneca)"
    ],
    piropos: [
        "Eres más dulce que el chocolate",
        "Si fueras un celular, serías un iPhone porque eres lo más grande que ha pasado en mi vida",
        "Si la belleza fuera delito, tú no tendrías fianza",
        "¿Crees en el amor a primera vista o tengo que volver a pasar?",
        "¿Cómo se llama la flor más bella? No sé, pero tú cómo te llamas",
        "Si el sol fuera a tu imagen, sería una estrella",
        "Eres como una estrella, te veo de lejos y brillas como nadie",
        "Si la belleza se midiera en tiempo, tú serías la eternidad",
        "Si la belleza fuera un segundo, tú serías horas",
        "Si cada vez que pensara en ti, una estrella se apagara, no habría estrellas en el cielo",
        "De todos los peces en el mar, tú eres el Nemo que yo quiero encontrar",
        "Tú eres mi principio, mi fin, mi todo",
        "Cuando pasas junto a mí, siento que el cielo se abre",
        "Si la luna fuera un beso, te la daría todas las noches",
        "Eres como el mar, profundo, misterioso y lleno de vida"
    ],
    reflexiones: [
        "La vida es un eco, lo que das, recibes. Lo que siembras, cosechas.",
        "Las oportunidades no se pierden, simplemente pasan a otro",
        "No hay atajos para cualquier sitio que valga la pena ir",
        "El mayor riesgo es no correr ningún riesgo",
        "Si buscas resultados distintos, no hagas siempre lo mismo",
        "No tengas miedo de renunciar a lo bueno para ir por lo grandioso",
        "A veces la adversidad es lo que necesitas para descubrir quién eres realmente",
        "La felicidad no es la ausencia de problemas, sino la habilidad de lidiar con ellos",
        "La paciencia es amarga, pero sus frutos son dulces",
        "No dejes que los sueños sean solo sueños",
        "La vida comienza donde termina tu zona de confort",
        "El único modo de hacer un gran trabajo es amar lo que haces"
    ],
    refranes: [
        "A buen entendedor, pocas palabras bastan",
        "Quien mucho abarca, poco aprieta",
        "No hay mal que por bien no venga",
        "Más vale tarde que nunca",
        "Más vale prevenir que lamentar",
        "A caballo regalado no se le mira el colmillo",
        "En boca cerrada no entran moscas",
        "Más vale pájaro en mano que ciento volando",
        "Ojos que no ven, corazón que no siente",
        "Dime con quién andas y te diré quién eres",
        "El que mucho abarca, poco aprieta",
        "El que mucho tiene, pronto se queda sin nada",
        "A cada cerdo le llega su San Martín"
    ]
};

function obtenerMensajeAleatorio(categoria) {
    const mensajesCategoria = mensajes[categoria];
    if (!mensajesCategoria || mensajesCategoria.length === 0) {
        throw new Error(`No hay mensajes disponibles para la categoría '${categoria}'`);
    }
    const indiceAleatorio = Math.floor(Math.random() * mensajesCategoria.length);
    return mensajesCategoria[indiceAleatorio];
}

function obtenerConsejoAleatorio() {
    return obtenerMensajeAleatorio('consejos');
}

function obtenerPiropoAleatorio() {
    return obtenerMensajeAleatorio('piropos');
}

function obtenerReflexionAleatoria() {
    return obtenerMensajeAleatorio('reflexiones');
}

function obtenerRefránAleatorio() {
    return obtenerMensajeAleatorio('refranes');
}

module.exports = {
    mensajes,
    obtenerConsejoAleatorio,
    obtenerPiropoAleatorio,
    obtenerReflexionAleatoria,
    obtenerRefránAleatorio
};