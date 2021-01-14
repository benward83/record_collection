import Model from './model';
import db from '../db';
import { NotFoundError } from '../robust';
import Vinyls from './vinyls';

class Songs extends Model {

  static create(data) {
    return db('songs')
      .returning(['*'])
      .insert(data)
      .then(rows => rows[0]);
  }

  static delete(id) {
    return db('songs')
      .returning(['*'])
      .where('id', id)
      .del()
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Song with id ${id} not found`);
      });
  }

  static get(id) {
    return db.select('*')
      .from('songs')
      .where('id', id)
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Song with id ${id} not found`);
      });
  }

  static getAll() {
    return db.select('*')
      .from('songs');
  }

  static getAllSongsForVinyl(vinylId) {
    return Vinyls.get(vinylId)
      .then(() => {
        return db.select('*')
          .from('songs')
          .where('vinyl_id', vinylId);
      });
  }

  static update(id, data) {
    return db('songs')
      .returning(['*'])
      .where('id', id)
      .update(data)
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Song with id ${id} not found`);
      });
  }

}

export default Songs;
