import express from "express";
import homeController from "../controllers/HomeController"
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage)
  router.get("/crud", homeController.getCrud)
  router.post("/post-crud", homeController.postCrud)
  router.get("/get-crud", homeController.displayGetCrud)


  router.get("*", (req, res) => {
    return res.render("404");
  });
  return app.use("/", router);
};
module.exports = initWebRoute;
