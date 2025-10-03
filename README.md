📚 Biblioteca CRUD

🚀 ¿Qué hace este proyecto?

Imagina que tienes una biblioteca.
Con esta app podrás:
✅ Registrar libros nuevos
✅ Listar todos los libros
✅ Editar la información de un libro
✅ Eliminar libros que ya no necesites

Todo se guarda en una base de datos MySQL.

🛠️ Herramientas utilizadas

⚡ Node.js (JavaScript del lado del servidor)

🌐 Express (framework web)

🗄️ MySQL (base de datos relacional)

🎨 EJS (para renderizar vistas)

💅 Bootstrap 5 (para que se vea bonito)

📦 Instalación paso a paso

Clona el proyecto

git clone https://github.com/tu-usuario/biblioteca-crud.git
cd biblioteca-crud


Configura tu base de datos

Copia .env.example y renómbralo a .env.

Pon tus datos de MySQL:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=biblioteca


Crea la base de datos

Abre el archivo /sql/schema.sql.

Ejecútalo en tu MySQL para crear la base y la tabla de libros.

Instala dependencias

npm install


Ejecuta el servidor

En desarrollo:

npm run dev


En producción:

npm start


Abre en tu navegador
👉 http://localhost:3000

📂 Rutas principales

/libros → Ver todos los libros

/libros/nuevo → Agregar un nuevo libro

/libros/editar/:id → Editar libro

/libros/borrar/:id → Eliminar libro

⚠️ Notas

Este proyecto es educativo.

No tiene validaciones avanzadas, ni seguridad (login, sesiones, CSRF).

Sirve como base para aprender y luego mejorarlo 🚀
