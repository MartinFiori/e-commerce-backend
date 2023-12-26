// require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
// const sequelize = require("./src/config/db.js");

// const PORT = process.env.PORT || 8080;
// const path = require("path");
// Importo las asociaciones
// require("./src/models/associations.js");
// const { saveDataBase } = require("./src/controllers/products_controller.js");

//midlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//dontenv
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv");
// }
// Serve static files from the 'img' directory
// app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/prueba", (req, res) => {
  res.status(200).json({ message: "todook1" });
});
//ROUTES

// app.use("/backend", require("./src/routes/users_routes.js"));
// app.use("/backend", require("./src/routes/products_routes.js"));
// app.use("/backend", require("./src/routes/category_routes.js"));
// app.use("/backend", require("./src/routes/payments_routes.js"));
// app.use("/images", express.static(path.join(__dirname, "/assets/images")));

// sequelize
//   .authenticate()
//   .then(() => console.log("DB-CONNECTED"))
//   .catch((err) => console.log(err.message));

// (async function () {
//   await sequelize.sync({ force: false });
//   console.log("save database");
//   saveDataBase();
//   app.listen(8080, () => console.log("Listening on 8080 ", 8080));
// })();

// app.listen(8080, () => console.log("Listening on port ", 8080));
