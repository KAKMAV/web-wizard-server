import pool from '../utils/pool';

export default class Setting {
  id;
  userId;
  pageUrl;
  backgroundColor;
  elementColor;
  fontFamily;
  fontSize;
  elementSize;

  constructor(row) {
    this.id = row.id;
    this.userId = row.user_id;
    this.pageUrl = row.page_url;
    this.backgroundColor = row.background_color;
    this.elementColor = row.element_color;
    this.fontFamily = row.font_family;
    this.fontSize = row.font_size;
    this.elementSize = row.element_size;
  }

  static async insert({ userId, pageUrl, backgroundColor, elementColor, fontFamily, fontSize, elementSize }) {
    const { rows } = await pool.query(`
      INSERT INTO settings (user_id, page_url, background_color, element_color, font_family, font_size, element_size)
      VALUES ($1, $2, $3, $4, $5, $6, $7) 
      RETURNING *
      `, [userId, pageUrl, backgroundColor, elementColor, fontFamily, fontSize, elementSize]);

    return new Setting(rows[0]);
  }

  static async findAll() {

    const { rows } =await pool.query(`
    SELECT *
    FROM settings
    `);

    return rows.map(row => new Setting(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM settings
    WHERE id= $1
    `, [id]);

    if(!rows[0]) return null;

    return new Setting(rows[0]);
  }

  static async update(setting, id) {
      const { rows } = await pool.query(
          `UPDATE settings
          SET user_id = $1,
            page_url = $2,
            background_color = $3,
            element_color = $4,
            font_family = $5,
            font_size = $6,
            element_size = $7
        WHERE id = $8
        RETURNING *`,
        [setting.userId, setting.pageUrl, setting.backgroundColor, setting.elementColor, setting.fontFamily, setting.fontSize, setting.elementSize, id]
      );

      return new Setting(rows[0]);
  }

  static async delete(id) {
      const { rows } = await pool.query(
        `DELETE FROM settings
        WHERE id = $1
        RETURNING *
      `, [id]);

      return new Setting(rows[0]);
  }


}
