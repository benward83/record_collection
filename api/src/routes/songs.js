const express = require('express');
const db = require('../db');
const router = express.Router();

//  Get all songs

router.get('/', (req, res) => {
  db.select('*')
    .from('songs')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err));
});

// Get all songs by id

router.get('/:id', (req, res) => {
  db.select('*')
    .from('songs')
    .where('id', req.params.id)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      res.json(404, { error: 'Artsist not found' });
    })
    .catch(err => res.send(500, err));
});

// Add a new artist

router.post('/', (req, res) => {
  const newSong = req.body;
  db('songs')
    .returning(['name', 'id'])
    .insert(newSong)
    .then(result => {
      return res.json(result[0]);
    })
    .catch(err => res.send(500, err));
});

// Update an song

router.patch('/:id', (req, res) => {
  db('songs')
    .returning(['*'])
    .where('id', req.params.id)
    .update(req.body)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Song not found' });
    })
    .catch(err => res.send(500, err));
});

// Delete an song

router.delete('/:id', (req, res) => {
  db('songs')
    .returning(['*'])
    .where('id', req.params.id)
    .del()
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Song not found' });
    })
    .catch(err => res.send(500, err));
});

module.exports = router;

