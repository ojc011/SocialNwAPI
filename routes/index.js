const router = require("express").Router();
// Imports all the API routes from /api/index.js
const apiRoutes = require("./api");

// adds the prefix of `/api` to all the api routes imported from the `api` directory
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
