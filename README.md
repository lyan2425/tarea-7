# Biblioteca CRUD

Proyecto de ejemplo para administrar la tabla `libros` en MySQL.

## Requisitos
- Node.js 18+ (o LTS)
- MySQL

## Instalación
1. Clonar el repositorio.
2. Copiar `.env.example` a `.env` y configurar las credenciales de MySQL.
3. Ejecutar el script SQL en `/sql/schema.sql` para crear la base de datos y la tabla.
4. Instalar dependencias:

```bash
npm install
```

5. Iniciar el servidor:

```bash
npm run dev    # con nodemon
# o
npm start
```

6. Abrir en el navegador: `http://localhost:3000`.

## Rutas principales
- `GET /libros` - listar libros
- `GET /libros/nuevo` - formulario para crear
- `POST /libros/nuevo` - guardar nuevo
- `GET /libros/editar/:id` - formulario para editar
- `POST /libros/editar/:id` - actualizar
- `GET /libros/borrar/:id` - confirmar eliminación
- `POST /libros/borrar/:id` - eliminar

## Notas
Este proyecto es un ejemplo didáctico. No está preparado para producción (no hay validación exhaustiva, control de sesiones ni protección CSRF).