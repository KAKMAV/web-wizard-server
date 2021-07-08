DROP TABLE IF EXISTS users,
settings CASCADE;
CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);
CREATE TABLE settings (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id TEXT NOT NULL,
  page_url TEXT NOT NULL,
  background_color TEXT NOT NULL,
  element_color TEXT NOT NULL,
  font_family TEXT NOT NULL,
  font_size TEXT NOT NULL,
  element_size TEXT NOT NULL
);
