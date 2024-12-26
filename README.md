# Frases API

Este proyecto es una API simple para gestionar frases utilizando Node.js, Express y TypeScript, con una base de datos MongoDB local. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre frases.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **controllers/**: Controladores que manejan la lógica de negocio.
  - **models/**: Modelos de datos que definen la estructura de los documentos en la base de datos.
  - **routes/**: Rutas de la API que conectan las solicitudes HTTP con los controladores.
  - **config/**: Configuración de la base de datos.
  - **types/**: Definiciones de tipos e interfaces utilizadas en la aplicación.
  - **app.ts**: Punto de entrada de la aplicación.

## Instalación

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

1. Asegúrate de tener MongoDB en ejecución en tu máquina local.
2. Ejecuta `npm start` para iniciar la API.
3. Accede a la API en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.