/*
 * All routes for Menu are defined here
 * Since this file is loaded in server.js into api/menu,
 *   these routes are mounted onto /menu
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const dbHelpers = require('./dbHelpers');

const menuRoutes = (db) => {
  const {getMenuItemsByCategory, getAllMenuItems} = dbHelpers(db);

  router.get("/:category", (req, res) => {
    const category = req.params.category;
    getMenuItemsByCategory(category)
      .then( (menuItems) => {
        res.status(201).json(menuItems.rows );
      })
      .catch(err => {
        res
          .status(500)
          .json( {error: err.message})
      });
  });

  router.get("/", (req, res) => {
    getAllMenuItems()
      .then( (menuItems) => {
        res.status(201).json(menuItems.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json( {error: err.message})
      });
  });

  return router;
};

module.exports = menuRoutes
