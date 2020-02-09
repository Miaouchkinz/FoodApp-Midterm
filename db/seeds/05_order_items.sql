INSERT INTO order_items (
  quantity,
  meal_item_id,
  order_id
)
VALUES
-- Order #1
-- Meal Items: ramen, stella
(
  1,
  -- soup: ramen
  7,
  1
),

(
  1,
  -- drinks: stella
  18,
  1
),

-- Order #2
-- Meal Items: ginger carrot soup, caprese salad, ginger kombucha
(
  1,
  -- ginger carrot soup
  10,
  2
),

(
  1,
  -- caprese salad
  11,
  2
),

(
  1,
  -- drinks: ginger kombucha
  19,
  2
),

-- Order #3
-- Meal Items: cheese & ham sandwich, beet salad
(
  1,
  -- cheese & ham sandwich
  2,
  3
),

(
  1,
  -- beet salad
  12,
  3
),

-- Order #4
-- Meal Items: petit poulet yeah, mango cilantro salad, cola
(
  1,
  -- sandwich: petit poulet yeah
  5,
  4
),

(
  1,
  -- salad: mango cilantro salad
  14,
  4
),

(
  1,
  -- drink: cola
  16,
  4
),

-- Order #5
-- Meal Items: Prime Rib, beet salad, stout
(
  1,
  -- sandwich: Prime Rib
  3,
  5
),

(
  1,
  -- beet salad
  12,
  5
),

(
  1,
  -- drink: stout
  17,
  5
);
