const express = require('express');
const db = require('../db');
const router = express.Router();

import { NotFoundError } from '../robust';
import Vinyls from '../models/vinyls';
import Songs from '../models/songs';

//  Get all vinyls

router.get('/', (req, res) => {
  Vinyls.getAll()
    .then(vinyls => {
      res.json(vinyls);
    })
    .catch(err => res.send(500, err));
});

// Get all vinyls by id

router.get('/:id', (req, res) => {
  Vinyls.get(req.params.id)
    .then(vinyl => {
      return res.json(vinyl);
    })
    .catch(err => {
      console.log(err);
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Get vinyls and their related songs

router.get('/:id/songs', (req, res) => {
  Songs.getAllSongsForVinyl(req.params.id)
    .then(songs => {
      return res.json(songs);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Add a new vinyl

router.post('/', (req, res) => {
  Vinyls.create(req.body)
    .then(vinyl => {
      return res.json(vinyl);
    })
    .catch(err => res.send(500, err));
});

// Update a vinyl

router.patch('/:id', (req, res) => {
  Vinyls.update(req.params.id, req.body)
    .then(vinyl => {
      return res.json(vinyl);
    })
    .catch(err => {
      if (err instanceof NotFoundError) {
        res.send(404, err);
      } else {
        res.send(500, err);
      }
    });
});

// Delete a vinyl

router.delete('/:id', (req, res) => {
  Vinyls.delete(req.params.id)
    .then(vinyl => {
      return res.json(vinyl);
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

