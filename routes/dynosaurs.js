const express = require("express");
const app = express();
const { Dynosaur } = require("../models/index");
const {
  verifyDynosaur,
  checkIfExists,
  checkIfExistsUpdate,
} = require("../middlewares/dynosaurs");

// Get all dynosaure
app.get("/", async (req, res) => {
  try {
    const dynosaurs = await Dynosaur.findAll();
    res.json(dynosaurs);
  } catch (e) {
    res.status(500).json("Internal server error");
  }
});

// Get one dynosaure by his id
app.get("/:id", verifyDynosaur, async (req, res) => {
  res.status(201).json(req.dynosaur);
});

// Post a new dynosaure
app.post("/", checkIfExists, async (req, res) => {
  try {
    const dynosaur = await Dynosaur.create(req.body);
    res.status(201).json(dynosaur);
  } catch (e) {
    res.status(500).json("Internal server error");
  }
});

app.put("/:id", verifyDynosaur, checkIfExistsUpdate, async (req, res) => {
  const dynosaur = req.dynosaur;
  dynosaur.set(req.body);
  await dynosaur.save();
  res.json(dynosaur);
});

app.delete("/:id", verifyDynosaur, async (req, res) => {
  const { id } = req.params;
  try {
    const dynosaur = await Dynosaur.destroy({
      where: {
        id,
      },
    });
    res.status(204);
  } catch (e) {
    res.status(500).json("Internal server error");
  }
});

module.exports = app;
