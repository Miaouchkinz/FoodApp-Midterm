const dbHelpers = db => {

  const getAllUsers = () => {
  return db.query(`SELECT * FROM users;`);
  };

  const getMenuItemsByCategory = (category) => {
    return db.query(`
    SELECT
      meal_items.*, meal_categories.name AS cat_name
    FROM meal_items
    JOIN meal_categories ON meal_category_id = meal_categories.id
    WHERE meal_categories.name = $1
    `, [category]);
  };

  const getAllMenuItems = () => {
    return db.query(`SELECT * FROM meal_items`);
  };

  const getUpcomingOrders = () => {
    return db.query(`
    SELECT
      clients.name,
      orders.id AS order_number,
      order_items.quantity AS item_qty,
      meal_items.name AS meal_item
    FROM order_items
    JOIN meal_items ON meal_item_id = meal_items.id
    JOIN orders ON order_id = orders.id
    JOIN clients ON client_id = clients.id
    WHERE orders.is_complete = false;
    `);
  };

  const getCompletedOrders = () => {
    return db.query(`
    SELECT
      clients.name,
      orders.id AS order_number
    FROM orders
    JOIN clients ON clients.id = client_id
    WHERE orders.is_complete = true;
    `);
  };

  const getLatestOrder = () => {
    return db.query(`
    SELECT
      clients.name,
      orders.id AS order_number,
      order_items.quantity AS item_qty,
      meal_items.name AS meal_item
    FROM order_items
    JOIN meal_items ON meal_item_id = meal_items.id
    JOIN orders ON order_id = orders.id
    JOIN clients ON client_id = clients.id
    WHERE orders.is_complete = false
    AND ;
    `)
    // desc order
    // limit 1;
  };

  return {
    getAllUsers,
    getMenuItemsByCategory,
    getAllMenuItems,
    getUpcomingOrders,
    getCompletedOrders,
    getLatestOrder
  };
}

module.exports = dbHelpers;
