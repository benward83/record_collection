const express = require('express');
const db = require('../db');
const router = express.Router();

//  Get all vinyls

router.get('/', (req, res) => {
  db.select('*')
    .from('vinyls')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err));
});

// Get all vinyls by id

router.get('/:id', (req, res) => {
  db.select('*')
    .from('vinyls')
    .where('id', req.params.id)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      res.json(404, { error: 'Artsist not found' });
    })
    .catch(err => res.send(500, err));
});

// Add a new vinyl

router.post('/', (req, res) => {
  const newVinyl = req.body;
  db('vinyls')
    .returning(['*'])
    .insert(newVinyl)
    .then(result => {
      return res.json(result[0]);
    })
    .catch(err => res.send(500, err));
});

// Update a vinyl

router.patch('/:id', (req, res) => {
  db('vinyls')
    .returning(['*'])
    .where('id', req.params.id)
    .update(req.body)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Vinyl not found' });
    })
    .catch(err => res.send(500, err));
});

// Delete a vinyl

router.delete('/:id', (req, res) => {
  db('vinyls')
    .returning(['*'])
    .where('id', req.params.id)
    .del()
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Vinyl not found' });
    })
    .catch(err => res.send(500, err));
});

module.exports = router;

