

<a href="https://github.com/matias-crypto/Frases-librery"><img title="Stars" src="https://img.shields.io/github/stars/matias-crypto/Frases-librery?color=ff4500&style=flat-square" /></a>
<a href="https://github.com/zhwzein/Killua-Zoldyck/network/members"><img title="Forks" src="https://img.shields.io/github/forks/matias-crypto/Frases-librery?color=ff4500&style=flat-square" /></a>
<a href="https://github.com/zhwzein/Killua-Zoldyck/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/matias-crypto/Frases-librery?label=watchers&color=ff4500&style=flat-square" /></a> <br>

```markdown
# Librería de Piropos y frases

Una pequeña librería JavaScript para manejar mensajes como consejos, piropos, Refranes, etc.
```



## Instalacion


Puedes clonar el repositorio y copiar directamente los archivos:

```bash
git clone https://github.com/matias-crypto/Frases-librery.git
```

## Uso


### Ejemplo 1: Obtener un consejo aleatorio

```javascript
const { obtenerConsejoAleatorio } = require('./Frases-librery/mensajes.js');

function obtenerYMostrarConsejoAleatorio() {
    const consejo = obtenerConsejoAleatorio();
    console.log(consejo);
}

obtenerYMostrarConsejoAleatorio();

```

## Ejemplo 2: Comando Bot WhatsApp 

```javascript

import mensajes, { obtenerMensajeAleatorio } from './Frases-librery/mensajes.js';

const handler = async (m, { conn }) => {
    try {
        const consejo = obtenerMensajeAleatorio('consejos');

        conn.reply(m.chat, `
*╭─────◈☘️◈──────╮*
${consejo}
*╰─────◈☘️◈──────╯*`, m, {
            contextInfo: {
                externalAdReply: {
                    title: '☘️ Consejo ☘️',
                    body: '¡Un consejo inspirador para tu día!',
                    sourceUrl: 'https://example.com',
                    thumbnail: 'https://example.com/thumbnail.jpg'
                }
            }
        });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Hubo un error al obtener el consejo. Inténtalo más tarde.', m);
    }
};

handler.help = ['consejo'];
handler.tags = ['frases'];
handler.command = ['consejo'];

export default handler;
```

## Ejemplo 3: Países

```javascript
const countries = require('./Frases-librery/paises.js');

countries.forEach(country => {
  console.log(`${country.name}: ${country.flag}, ${country.currency}`);
});
```

## Ejemplo 4: Países (Comando WhatsApp)

```javascript
import countries from './Frases-librery/mensajes.js';

const handler = async (m, { conn }) => {
    try {
        const mensajePaises = countries.map(country => 
            `País: ${country.name}\nBandera: ${country.flag}\nMoneda: ${country.currency}`
        ).join('\n\n');

        conn.reply(m.chat, `
*╭─────◈🌍◈──────╮*
${mensajePaises}
*╰─────◈🌍◈──────╯*`, m, {
            contextInfo: {
                externalAdReply: {
                    title: '🌍 Información de Países 🌍',
                    body: '¡Aquí tienes información sobre varios países!',
                    sourceUrl: 'https://example.com',
                    thumbnail: 'https://example.com/thumbnail.jpg'
                }
            }
        });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Hubo un error al obtener la información de los países. Inténtalo más tarde.', m);
    }
};

handler.help = ['pais'];
handler.tags = ['información'];
handler.command = ['pais'];

export default handler;
```

## Ejemplo 5: Futbolistas aleatorios

```javascript

const { obtenerFutbolistaAleatorio } = require('./Frases-librery/futbolista2');  

const futbolistaAleatorio = obtenerFutbolistaAleatorio();
console.log(futbolistaAleatorio);
```

## Contribuir

Si quieres contribuir a esta librería añadiendo más mensajes o mejorando su funcionalidad, puedes hacer un fork del repositorio y enviar un pull request.

## Autor

- matias-crypto: <usiku1234@gmail.com>

