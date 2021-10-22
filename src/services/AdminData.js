import { db } from "../firebase";

class AdminData {
  getAll() {
    return db.ref("/project");
  }

  create(tutorial) {
    return db.ref("/project").push(tutorial);
  }

  update(key, value) {
    return db.ref("/project").child(key).update(value);
  }

  delete(key) {
    return db.ref("/project").child(key).remove();
  }

  deleteAll() {
    return db.ref("/project").remove();
  }
}

export default new AdminData();
