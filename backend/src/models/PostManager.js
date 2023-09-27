const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select p.id, p.title, p.content, p.creation, u.nickname from ${this.table} p join user u on u.id = p.user_id order by creation desc`
    );

    return rows;
  }

  async getByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    return rows;
  }

  async postOne({ nickname, email, password }) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (nickname, email, password) VALUES (?,?,?)`,
      [nickname, email, password]
    );

    return rows;
  }
}

module.exports = PostManager;
