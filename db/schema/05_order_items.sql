DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  meal_item_id INTEGER REFERENCES meal_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE
);