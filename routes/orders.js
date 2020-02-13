/*
 * All routes for Orders on the client side are defined here
 * Since this file is loaded in server.js into api/orders,
 *   these routes are mounted onto orders
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const dbHelpers = require('./dbHelpers');

const orderRoutes = (db) => {
  const { getOrderInfo } = dbHelpers(db);
  //get info for a particular order
  // used for waiting page
  router.get("/:id", (req, res) => {
    const orderNumber = req.params.id
    getOrderInfo(orderNumber)
      .then( (orderDetails) => {
        res.status(201).json(orderDetails.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json( {error: err.message} )
      });
  });

  return router;

};

module.exports = orderRoutes;
