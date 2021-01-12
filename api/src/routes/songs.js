const express = require('express');
const db = require('../db');
const router = express.Router();

import { NotFoundError } from '../robust';
import Songs from '../models/songs';

//  Get all songs

router.get('/', (req, res) => {
  Songs.getAll()
    .then(songs => {
      res.json(songs);
    })
    .catch(err => res.send(500, err));
});

// Get all songs by id

router.get('/:id', (req, res) => {
  Songs.get(req.params.id)
    .then(song => {
      return res.json(song);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Add a new song

router.post('/', (req, res) => {
  Songs.create(req.body)
    .then(song => {
      return res.json(song);
    })
    .catch(err => res.send(500, err));
});

// Update a song

router.patch('/:id', (req, res) => {
  Songs.update(req.params.id, req.body)
    .then(song => {
      return res.json(song);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Delete a song

router.delete('/:id', (req, res) => {
  Songs.delete(req.params.id)
    .then(song => {
      return res.json(song);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

module.exports = router;

