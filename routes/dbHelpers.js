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
    GROUP BY orders.id, clients.name, order_items.quantity, meal_items.name
    ORDER BY orders.id DESC
    LIMIT 2;
    `)
  };

  const orderComplete = (id) => {
    return db.query(`
    UPDATE orders
    SET is_complete = true
    WHERE id = $1
    `, [id])
  };

  const orderPaid = (id) => {
    return db.query(`
    UPDATE orders
    SET is_paid = true
    WHERE id = $1
    `, [id])
  };

  const getOrderInfo = (orderNumber) => {
    return db.query(`
    SELECT
      meal_items.name AS meal_item,
      order_items.quantity,
      clients.name AS client_name,
      clients.phone_number AS phone_number
    FROM order_items
    JOIN meal_items ON meal_items.id = meal_item_id
    JOIN orders ON order_id = orders.id
    JOIN clients ON clients.id = client_id
    WHERE orders.id = $1
    `, [orderNumber]);
  };

  const createOrder = (userId) => {
    return db.query(`
      INSERT INTO orders (client_id)
      VALUES ($1)
      RETURNING orders.id
    `, [userId]);
  };

  const insertOrderItems = (cart_items, order_id) => {
    const prepared_items = cart_items.map( (item) => {
      return db.query(`
        INSERT INTO order_items (meal_item_id, order_id, quantity)
        VALUES ($1, $2, $3)
        RETURNING *
      `, [item.id, order_id, item.qty])
    });

    return Promise.all(prepared_items);

  };

  return {
    getAllUsers,
    getMenuItemsByCategory,
    getAllMenuItems,
    getUpcomingOrders,
    getCompletedOrders,
    getLatestOrder,
    orderComplete,
    orderPaid,
    getOrderInfo,
    createOrder,
    insertOrderItems
  };
}

module.exports = dbHelpers;
