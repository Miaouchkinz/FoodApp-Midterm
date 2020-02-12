/*
 * All routes for Menu are defined here
 * Since this file is loaded in server.js into api/menu,
 *   these routes are mounted onto /menu
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const dbHelpers = require('./dbHelpers');

const adminRoutes = (db) => {
  const { getUpcomingOrders, getCompletedOrders, getLatestOrder } = dbHelpers(db);
  // admin/orders/upcoming
  router.get("/orders/upcoming", (req, res) => {
    getUpcomingOrders()
      .then( (upcomingOrders) => {
        res.status(201).json(upcomingOrders.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json( {error: err.message} )
      });
  })
  // admin/orders/ready_for_pickup
  router.get("/orders/ready_for_pickup", (req, res) => {
    getCompletedOrders()
      .then( (completedOrders) => {
        res.status(201).json(completedOrders.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json( {error: err.message} )
      });
  })
  // admin/orders/latest_order
  router.get("/orders/latest_order", (req, res) => {
    getLatestOrder()
      .then( (latestOrder) => {
        res.status(201).json(latestOrder.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json( {error: err.message} )
      });
  })


  return router;

};

module.exports = adminRoutes;