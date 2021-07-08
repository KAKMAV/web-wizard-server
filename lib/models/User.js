import pool from '../utils/pool.js';

export default class User {
  id;
  username;
  email;
  password;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.email = row.email; 
    this.password = row.password;
  }

  static async insert({ username, email, password }) {
    const { rows } = await pool.query(`
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [username, email, password]);

    return new User(rows[0]);
  }

  static async findAll() {

    const { rows } =await pool.query(`SELECT *
    FROM users
    `);

    return rows.map(row => new User(row));
  }
}