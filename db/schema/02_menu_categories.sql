DROP TABLE IF EXISTS meal_categories CASCADE;

CREATE TABLE meal_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);
