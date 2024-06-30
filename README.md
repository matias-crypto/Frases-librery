

```markdown
# Librería de Piropos y frases

Una pequeña librería JavaScript para manejar mensajes como consejos, piropos, citas inspiradoras, etc.
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

import mensajes from './Frases-librery/mensajes.js';

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

function obtenerMensajeAleatorio(categoria) {
    const mensajesCategoria = mensajes[categoria];
    if (!mensajesCategoria) {
        return "Categoría no encontrada";
    }
    const indice = Math.floor(Math.random() * mensajesCategoria.length);
    return mensajesCategoria[indice];
}

handler.help = ['consejo'];
handler.tags = ['frases'];
handler.command = ['consejo'];

export default handler;
```
## Métodos Disponibles

### `obtenerMensajeAleatorio(categoria)`

- **Descripción**: Retorna un mensaje aleatorio de la categoría especificada.
- **Parámetros**:
- **categoria**: Nombre de la categoría de mensajes ('consejos', 'piropos', etc.).
- **Retorno**: Un mensaje aleatorio de la categoría especificada.

## Contribuir

Si quieres contribuir a esta librería añadiendo más mensajes o mejorando su funcionalidad, puedes hacer un fork del repositorio y enviar un pull request.

## Autores

- matias-crypto <usiku1234@gmail.com>

