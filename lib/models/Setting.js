import pool from '../utils/pool.js';

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
     const { rows } = await pool.query(
        `INSERT INTO settings (user_id, page_url, background_color, element_color, font_family, font_size, element_size)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
        [userId, pageUrl, backgroundColor, elementColor, fontFamily, fontSize, elementSize]
     );

     return new Setting(rows[0]);
 }
}



