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
  const { getOrderInfo, createOrder, insertOrderItems } = dbHelpers(db);
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

  // create new order and order_item entries when someone places an order
  router.post("/new", (req, res) => {
    let data = {
      cart_items: req.body.cartItems,
      user_id: req.session.user_id
    }
    return createOrder(data.user_id)
      .then((orderData) => insertOrderItems(data.cart_items, orderData.rows[0].id))
      .then((queryRes) => {
        return res.status(201).json(queryRes.map((item) => item.rows[0]))
      })
      .catch(err => {
        return res
          .status(500)
          .json( {error: err.message} )
      })
  });

  return router;

};

module.exports = orderRoutes;
