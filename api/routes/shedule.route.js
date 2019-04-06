const express = require("express");

const router = express.Router();

const sheduleController = require("../controllers/shedule.controller");

router.get("/schedule/:from/:to/:date", sheduleController.getShedule);

module.exports = router;
