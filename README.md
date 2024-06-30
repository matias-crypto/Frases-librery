

```markdown
# Librería de Piropos y frases

Una pequeña librería JavaScript para manejar mensajes como consejos, piropos, citas inspiradoras, etc.

## Instalación

Para usar esta librería en tu proyecto, puedes instalarla usando npm:
```

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
