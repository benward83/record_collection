import Model from './model';
import db from '../db';
import { NotFoundError } from '../robust';

class Artists extends Model {

  static create(data) {
    return db('artists')
      .returning(['*'])
      .insert(data)
      .then(rows => rows[0]);
  }

  static delete(id) {
    return db('artists')
      .returning(['*'])
      .where('id', id)
      .del()
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Artist with id ${id} not found`);
      });
  }

  static get(id) {
    return db.select('*')
      .from('artists')
      .where('id', id)
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Artist with id ${id} not found`);
      });
  }

  static getAll() {
    return db.select('*')
      .from('artists');
  }

  static update(id, data) {
    return db('artists')
      .returning(['*'])
      .where('id', id)
      .update(data)
      .then(rows => {
        if (rows.length) {
          return rows[0];
        }
        throw new NotFoundError(`Artist with id ${id} not found`);
      });
  }

}

export default Artists;

