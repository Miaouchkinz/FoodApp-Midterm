/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const dbHelpers = require('./dbHelpers');

const usersRoutes = (db) => {
  const {getAllUsers} = dbHelpers(db);
  router.get("/", (req, res) => {
    getAllUsers()
      .then(users => {
        res.status(201).json({ users })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

module.exports = usersRoutes;
