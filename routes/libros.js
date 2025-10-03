const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Listar todos los libros
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM libros ORDER BY id DESC');
    res.render('index', { libros: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la base de datos');
  }
});

// Formulario: crear
router.get('/nuevo', (req, res) => {
  res.render('form', { libro: {}, action: '/libros/nuevo' });
});

router.post('/nuevo', async (req, res) => {
  try {
    const { titulo, autor, numpaginas, categoria } = req.body;
    await db.query('INSERT INTO libros (titulo, autor, numpaginas, categoria) VALUES (?, ?, ?, ?)',
      [titulo, autor, numpaginas || null, categoria]);
    res.redirect('/libros');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear libro');
  }
});

// Formulario: editar
router.get('/editar/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM libros WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).send('Libro no encontrado');
    res.render('form', { libro: rows[0], action: '/libros/editar/' + req.params.id });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la base de datos');
  }
});

router.post('/editar/:id', async (req, res) => {
  try {
    const { titulo, autor, numpaginas, categoria } = req.body;
    await db.query('UPDATE libros SET titulo = ?, autor = ?, numpaginas = ?, categoria = ? WHERE id = ?',
      [titulo, autor, numpaginas || null, categoria, req.params.id]);
    res.redirect('/libros');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar libro');
  }
});

// Confirmar eliminar
router.get('/borrar/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM libros WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).send('Libro no encontrado');
    res.render('confirm_delete', { libro: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la base de datos');
  }
});

router.post('/borrar/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM libros WHERE id = ?', [req.params.id]);
    res.redirect('/libros');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al borrar libro');
  }
});

module.exports = router;