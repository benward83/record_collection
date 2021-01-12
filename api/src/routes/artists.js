const express = require('express');
const db = require('../db');
const router = express.Router();

import { NotFoundError } from '../robust';
import Artists from '../models/artists';

//  Get all artists

router.get('/', (req, res) => {
  Artists.getAll()
    .then(artists => {
      res.json(artists);
    })
    .catch(err => res.send(500, err));
});

// Get all artists by id

router.get('/:id', (req, res) => {
  Artists.get(req.params.id)
    .then(artist => {
      res.json(artist);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Add a new artist

router.post('/', (req, res) => {
  Artists.create(req.body)
    .then(artist => {
      return res.json(artist);
    })
    .catch(err => res.send(500, err));
});

// Update an artist

router.patch('/:id', (req, res) => {
  Artists.update(req.params.id, req.body)
    .then(artist => {
      return res.json(artist);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Delete an artist

router.delete('/:id', (req, res) => {
  Artists.delete(req.params.id)
    .then(artist => {
      return res.json(artist);
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
