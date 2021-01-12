import db from '../db';

class Model {

  static create(data) {
    throw new Error(`${this.constructor.name}#create not implemented`);
  }

  static delete(id) {
    throw new Error(`${this.constructor.name}#delete not implemented`);
  }

  static get(id) {
    throw new Error(`${this.constructor.name}#get not implemented`);
  }

  static getAll() {
    throw new Error(`${this.constructor.name}#getAll not implemented`);
  }

  static update(id, data) {
    throw new Error(`${this.constructor.name}#update not implemented`);
  }

}

export default Model;
