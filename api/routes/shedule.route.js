const express = require("express");

const router = express.Router();

const sheduleController = require("../controllers/shedule.controller");

router.get("/schedule/:from/:to/:date", sheduleController.getShedule);
router.get("/schedule", sheduleController.getAll);

module.exports = router;
