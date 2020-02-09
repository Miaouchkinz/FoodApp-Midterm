DROP TABLE IF EXISTS meal_items CASCADE;

CREATE TABLE meal_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  ingredient_list TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  allergens TEXT,
  meal_category_id INTEGER REFERENCES meal_categories(id) ON DELETE CASCADE
);
