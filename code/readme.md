# API de Gestión de Bisontes y Logística

Esta API permite gestionar usuarios, roles, bisontes, envíos, detalle de ítems, acarreos, cuidadores y clientes en un sistema logístico. Está desarrollada con Node.js, Express y Sequelize, conectándose a una base de datos MySQL.

## Instalación

1. Clona el repositorio y accede a la carpeta `code`.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```
   USERDB=usuario_mysql
   ROOT_PASSWORD=tu_password
   DATABASE=nombre_db
   HOST=localhost
   DB_PORT=3306
   DIALECT=mysql
   PORT_APP=3000
   ```

## Ejecución

- En desarrollo:
  ```bash
  npm start
  ```
- En producción:
  ```bash
  npm run local
  ```
- Docker:
  ```bash
  docker build -t bisontes-api .
  docker run -p 3000:3000 bisontes-api
  ```

## Endpoints Principales

- **Usuarios:** `/usuarios`
- **Roles:** `/roles`
- **Bisontes:** `/bisontes`
- **Envios:** `/envios`
- **Detalle de ítems:** `/detalle_items`
- **Acarreos:** `/acarreos`
- **Cuidadores:** `/cuidadores`
- **Clientes:** `/clientes`
- **Sincronización DB:** `/db`

Cada endpoint soporta operaciones CRUD (GET, POST, PUT, DELETE) según el recurso.

## Estructura del Proyecto

- `server.js` y `local.js`: Archivos de entrada del servidor.
- Carpeta `/db/models`: Modelos Sequelize para cada entidad.
- Carpeta `/usuarios`, `/roles`, etc.: Controladores, servicios y rutas para cada recurso.

## Ejemplo de Uso

Para obtener todos los usuarios:
```http
GET /usuarios
```

Para crear un nuevo envío:
```http
POST /envios
Content-Type: application/json

{
  "campo1": "valor",
  "campo2": "valor"
}
```

## Notas

- La API usa Sequelize para la gestión de la base de datos.
- El puerto por defecto es el definido en la variable `PORT_APP`.
- Revisa los archivos en `/code` para ver la lógica específica de cada recurso.

## Licencia