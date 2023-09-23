// In src/v1/routes/workoutRoutes.js
const express = require("express");
const manufacturerController = require("../controllers/manufacturerController");

const router = express.Router();

router.get("/", manufacturerController.getAllMfrs);
router.get("/:id", manufacturerController.getOneMfrsById);
router.get("/:name", manufacturerController.getOneMfrsByName);

module.exports = router;