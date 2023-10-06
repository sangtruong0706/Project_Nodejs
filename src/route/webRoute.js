import express from "express";
import homeController from "../controllers/HomeController"
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/", homeController.homePage)
  router.get("*", (req, res) => {
    return res.render("404");
  });
  return app.use("/", router);
};
module.exports = initWebRoute;
