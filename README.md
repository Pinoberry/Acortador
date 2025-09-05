# Acortador Junior

## Descripción

Aplicación sencilla para acortar enlaces que funciona en el navegador usando almacenamiento local.

## Uso

- Abrir `index.html` en el navegador.
- Escribir una URL y pulsar `Acortar`.
- Copiar el enlace corto generado.
- Al visitar el enlace corto, la página redirige a la URL original.

## Detalles

- Los códigos se guardan en `localStorage` con el prefijo `acortador:`.
- El historial guarda hasta 10 enlaces recientes.
- Los enlaces cortos usan el hash de la URL (`#codigo`).

## Limitaciones

- No tiene servidor ni base de datos.
- Solo funciona en el mismo navegador donde se creó el enlace.
- No hay métricas ni vencimiento de enlaces.

## Estructura

- `index.html`: interfaz.
- `styles.css`: estilos.
- `app.js`: lógica.
