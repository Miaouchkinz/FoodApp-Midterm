const dbHelpers = db => {

  const getAllUsers = () => {
  return db.query(`SELECT * FROM users;`)
  }

  const getMenuItemsByCategory = (category) => {
    return db.query(`
    SELECT
      meal_items.*, meal_categories.name AS cat_name
    FROM meal_items
    JOIN meal_categories ON meal_category_id = meal_categories.id
    WHERE meal_categories.name = $1
    `, [category])
  }

  return {getAllUsers, getMenuItemsByCategory};
}

module.exports = dbHelpers;
