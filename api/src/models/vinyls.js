import Model from './model';
import db from '../db';
import { NotFoundError } from '../robust';

class Vinyls extends Model {

  static create(data) {
    return db('vinyls')
      .returning(['*'])
      .insert(data)
      .then(rows => rows[0]);
  }

  static delete(id) {
    return db('vinyls')
      .returning(['*'])
      .where('id', id)
      .del()
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Vinyl with id ${id} not found`);
      });
  }

  static get(id) {
    const songs = db.raw(`
      SELECT json_agg(songs)
      FROM songs
      WHERE songs.vinyl_id = vinyls.id
    `).wrap('(', ') songs');

    return db.select('*', songs)
      .from('vinyls')
      .where('vinyls.id', id)
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Vinyl with id ${id} not found`);
      });
  }

  static getAll() {
    return db.select('*')
      .from('vinyls');
  }

  static update(id, data) {
    return db('vinyls')
      .returning(['*'])
      .where('id', id)
      .update(data)
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Vinyl with id ${id} not found`);
      });
  }

}

export default Vinyls;
