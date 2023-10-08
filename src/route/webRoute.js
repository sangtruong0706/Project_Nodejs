import express from "express";
import homeController from "../controllers/HomeController";
import userController from "../controllers/UserController";
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCrud);
  router.post("/post-crud", homeController.postCrud);
  router.get("/get-crud", homeController.displayGetCrud);
  router.get("/edit-crud", homeController.getEditCrud);
  router.post("/put-crud", homeController.putCrud);
  router.get("/delete-crud", homeController.deleteCrud);

  router.post("/api/login", userController.handleLogin);

  router.get("*", (req, res) => {
    return res.render("404");
  });
  return app.use("/", router);
};
module.exports = initWebRoute;
