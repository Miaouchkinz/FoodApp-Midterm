/*
 * All routes for Admin / Restaurant View are defined here
 * Since this file is loaded in server.js into api/admin,
 *   these routes are mounted onto admin
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const dbHelpers = require('./dbHelpers');
const { orderIsReady } = require('../send-sms');

const adminRoutes = (db) => {
  const {
    getUpcomingOrders,
    getCompletedOrders,
    getLatestOrder,
    orderComplete,
    orderPaid
  } = dbHelpers(db);
  // api/admin/orders/upcoming
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
  });
  // api/admin/orders/ready_for_pickup
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
  });
  // api/admin/orders/latest_order
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
  });
  // /api/admin/orders/:id
  // update order to complete & update order to paid
  router.post("/orders/:id", (req, res) => {
    let data = {
      order_id: req.params.id,
      is_complete: req.body.is_complete,
      is_paid: req.body.is_paid
    }
    // update is_complete
    if (!data.is_complete) {
      orderComplete(data.order_id)
        .then( () => {
          orderIsReady();
          return res.sendStatus(201);
        })
        .catch(err => {
          res
            .status(500)
            .json( {error: err.message} )
        });
    }
    // update is_paid
    else if (!data.is_paid) {
      orderPaid(data.order_id)
        .then( (res) => res.sendStatus(201))
        .catch(err => {
          res
            .status(500)
            .json( {error: err.message} )
        });
    }

  });


  return router;

};

module.exports = adminRoutes;
