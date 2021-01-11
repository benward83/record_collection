const express = require('express');
const db = require('../db');
const router = express.Router();

//  Get all artists

router.get('/', (req, res) => {
  db.select('*')
    .from('artists')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err));
});

// Get all artists by id

router.get('/:id', (req, res) => {
  db.select('*')
    .from('artists')
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
  const newArtist = req.body;
  db('artists')
    .returning(['name', 'id'])
    .insert(newArtist)
    .then(result => {
      return res.json(result[0]);
    })
    .catch(err => res.send(500, err));
});

// Update an artist

router.patch('/:id', (req, res) => {
  db('artists')
    .returning(['*'])
    .where('id', req.params.id)
    .update(req.body)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Arsits not found' });
    })
    .catch(err => res.send(500, err));
});

// Delete an artist

router.delete('/:id', (req, res) => {
  db('artists')
    .returning(['*'])
    .where('id', req.params.id)
    .del()
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Artist not found' });
    })
    .catch(err => res.send(500, err));
});

module.exports = router;
