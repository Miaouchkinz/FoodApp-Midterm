INSERT INTO meal_items (
  name,
  description,
  ingredient_list,
  price,
  allergens,
  meal_category_id
)

VALUES
-- SANDWICHES
-- 1
(
  'Roast Beef',
  'Delicious slow roasted served on a thick slice of grilled french bread with dijon mustard, red onions, and provolone cheese.',
  'beef, red onion, french bread, provolone cheese, dijon mustard',
  900,
  null,
  1
),
-- 2
(
  'Classic Ham & Cheese',
  'This classic ham and cheese is elevated with brie cheese and crunchy french baguette pairing.',
  'brie cheese, ham, baguette',
  800,
  null,
  1
),
-- 3
(
  'The Theo Fancy Rib Supreme',
  'Inspired by his daily visits to his local deli, Theo brings us a taste of home with this prime rib sandwich on a ciabatta bun topped with garlic truffle aioli and caramelized onions.',
  'onion, prime rib, garlic, truffle, ciabatta',
  1000,
  null,
  1
),
-- 4
(
  'Le Camembert',
  'A hearty and delicious vegetarian treat that is sure to get you through your work day. Camembert in a bed of lettuce, fried plantains, fresh apple, avocado, pesto sauce and sour cream dijon.',
  'camembert cheese, plantain, lettuce, apple, avocado, pesto sauce, sour cream dijon, homemade bun',
  1300,
  'vegetarian',
  1
),
-- 5
(
  'Petit Poulet Yeah',
  'A tiny chicken with a big kick that will make you go YEAH!',
  'little chicken, spicy sauce, lettuce, homemade bun',
  900,
  null,
  1
),

-- SOUP
-- 6
(
  'Pumpkin Soup',
  'A rich and suprisingly creamy vegan pumpkin soup.',
  'pumpkin, garlic, onion, coconut milk',
  700,
  'gluten free, vegan',
  2
),
-- 7
(
  'Tonkotsu Ramen',
  'Thin-cut homemade noodles topped with roast pork belly, bamboo shoots, enoki mushrooms, spring onions, and seasoned eggs.',
  'ramen noodles, pork belly, bamboo shoot, enoki mushroom, spring onion, seasoned egg',
  1000,
  null,
  2
),
-- 8
(
  'Minestrone',
  'Traditional minestrone soup that will make you feel at home.',
  'onion, garlic, celery, carrot, green beans, crushed tomatoes, herbs',
  800,
  'vegan',
  2
),
-- 9
(
  'Smoky Butternut Squash',
  'A classic soup for bacon lovers.',
  'butternut squash, onion, red bell pepper, bacon, garlic, thyme',
  800,
  null,
  2
),
-- 10
(
  'Ginger Carrot Soup',
  'Healthy soup made from fresh ingredients.',
  'ginger, carrot, onion, coconut milk',
  800,
  'vegan',
  2
),

-- SALAD
-- 11
(
  'Caprese',
  'A refreshing classic.',
  'tomato, basil, fresh mozzarella, olive oil, balsamic glaze.',
  800,
  'vegetarian',
  3
),
-- 12
(
  'Roasted Beets & Goat Cheese',
  'Start your day right with roasted beets, arugula, and a refreshing citrus vinaigrette topped with pecans.',
  'arugula, beet, goat cheese, citrus vinaigrette, pecan',
  800,
  'vegetarian, contains nuts',
  3
),
-- 13
(
  'Halloumi Mint',
  'Minty seared Halloumi Fattoush Salad with medjool dates.',
  'spinach, medjool date, snow pea, mint, sumac, halloumi',
  800,
  'vegetarian',
  3
),
-- 14
(
  'Mango Cilantro',
  'Refreshing, light, summery salad.',
  'mango, cilantro, lime, red onion',
  800,
  'vegan',
  3
),
-- 15
(
  'Ceasar Salad',
  'A hearty classic with spicy chickpeas.',
  'chickpea, romaine lettuce, ceasar dressing, crouton, lemon',
  800,
  'vegetarian',
  3
),

-- DRINKS
-- 16
(
  'Coke Cola',
  'A refreshing beverage.',
  'cola',
  200,
  null,
  4
),
-- 17
(
  'Stout #70',
  'A delicious dark stout from your local Brasserie Harricana, 6.0%.',
  'beer',
  600,
  null,
  4
),
-- 18
(
  'Stella',
  'A refreshing beverage.',
  'beer',
  600,
  null,
  4
),
-- 19
(
  'Ginger Kombucha',
  'A refreshing beverage.',
  'kombucha',
  400,
  null,
  4
),
-- 20
(
  'Smoothie Surprise',
  'Special of the day: blueberry, banana, almond milk, and maple syrup.',
  'blueberry, banana, almond milk, maple syrup',
  600,
  null,
  4
);
