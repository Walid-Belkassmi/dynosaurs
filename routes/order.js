const express = require("express");
const app = express();
const { Dynosaur, sequelize } = require("../models/index");

app.get("/", async (req, res) => {
  const dynosaurs = await Dynosaur.findAll();
  res.json(dynosaurs);
});

app.get("/desc", async (req, res) => {
  const dynosaurs = await Dynosaur.findAll({
    order: sequelize.literal("(appearanceYear) DESC"),
  });
  res.json(dynosaurs);
});

app.get("/asc", async (req, res) => {
  const dynosaurs = await Dynosaur.findAll({
    order: sequelize.literal("(appearanceYear)"),
  });
  res.json(dynosaurs);
});

app.get("/rnd", async (req, res) => {
  const dynosaurs = await Dynosaur.findAll({
    order: sequelize.random(),
  });
  res.json(dynosaurs);
});

module.exports = app;
