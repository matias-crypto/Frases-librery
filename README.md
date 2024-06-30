

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
import mensajes from 'libreria-mensajes';

function obtenerConsejoAleatorio() {
    const consejo = mensajes.obtenerMensajeAleatorio('consejos');
    console.log(consejo);
}

obtenerConsejoAleatorio();
```

### Ejemplo 2: Obtener un piropo aleatorio

```javascript
import mensajes from 'libreria-mensajes';

function obtenerPiropoAleatorio() {
    const piropo = mensajes.obtenerMensajeAleatorio('piropos');
    console.log(piropo);
}

obtenerPiropoAleatorio();
```
## Ejemplo 3: Comando Bot WhatsApp 

```javascript

import mensajes from './mensajes.js';

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

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
```
