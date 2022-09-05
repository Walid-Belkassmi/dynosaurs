const express = require("express");
const app = express();
const port = 5000;
const dynosaursRoutes = require("./routes/dynosaurs");
const orderRoutes = require("./routes/order");

// Connexion a la base de données
require("./models/index");

app.use(express.json());
app.use("/dynosaurs", dynosaursRoutes);
app.use("/order", orderRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
