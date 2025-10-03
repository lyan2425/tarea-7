const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
const librosRouter = require('./routes/libros');
app.get('/', (req, res) => res.redirect('/libros'));
app.use('/libros', librosRouter);

// Error simple
app.use((req, res) => res.status(404).send('Página no encontrada'));

app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));