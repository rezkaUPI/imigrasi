const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  field1: String,
  field2: String,
});

const DataModel = mongoose.model("Data", DataSchema);

router.get("/", async (req, res) => {
  const data = await DataModel.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  const newData = new DataModel(req.body);
  await newData.save();
  res.json({ message: "Data saved successfully" });
});

module.exports = router;