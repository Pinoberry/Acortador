# Acortador de URLs

Aplicación web para acortar URLs de manera rápida y sencilla. Permite a los usuarios convertir enlaces largos en versiones más cortas y manejables, con funcionalidad de copiado al portapapeles y un historial de enlaces recientes.

## Características

- Acortamiento de URLs largas a enlaces más cortos
- Copiado automático al portapapeles con un solo clic
- Historial de los últimos 10 enlaces acortados
- Interfaz de usuario intuitiva y responsiva
- Almacenamiento local de los enlaces acortados
- Redirección automática al hacer clic en un enlace acortado
- Validación de URLs para asegurar enlaces válidos

## Estructura del Proyecto

```
Acortador/
├── index.html          # Estructura principal de la aplicación
├── app.js             # Lógica de la aplicación
├── styles.css         # Estilos de la interfaz de usuario
└── README.md          # Documentación del proyecto
```

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (solo para cargar recursos externos si los hubiera)

## Instalación

1. Clonar el repositorio:

   ```
   git clone <url-del-repositorio>
   ```

2. Abrir el archivo `index.html` en un navegador web.

## Uso

1. Ingresar la URL larga en el campo de texto
2. Hacer clic en el botón "Acortar"
3. Copiar el enlace acortado haciendo clic en el botón "Copiar"
4. Los enlaces recientes aparecerán en la sección de historial

## Detalles Técnicos

- Los códigos se almacenan en `localStorage` con el prefijo `acortador:`
- Se generan códigos aleatorios de 6 caracteres (letras mayúsculas, minúsculas y números)
- El historial mantiene un máximo de 10 enlaces recientes
- Las URLs se normalizan automáticamente (se agrega https:// si es necesario)
- Los enlaces cortos utilizan el hash de la URL (`#codigo`)

## Limitaciones

- Los enlaces acortados solo funcionan en el navegador donde se crearon
- No hay persistencia entre diferentes dispositivos o navegadores
- No incluye métricas de clics ni vencimiento de enlaces
- No requiere servidor ni base de datos externa

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- LocalStorage para almacenamiento local

