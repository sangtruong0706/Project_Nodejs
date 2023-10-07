import asyncHandler from "express-async-handler";
import db from "../models/index";
import CrudServices from "../services/CrudServices";
let getHomePage = asyncHandler(async (req, res) => {
  try {
    let dataUser = await db.User.findAll();
    return res.render("main", { data: JSON.stringify(dataUser),  title: "This is home page"  });
  } catch (e) {
    console.log(e);
  }
  
});
let getCrud = asyncHandler(async (req, res) => {
  return res.render("main", {data: {title: "Crud", page: "crud"}})
});

let postCrud = asyncHandler(async (req, res) => {
  let message = await CrudServices.createNewUser(req.body)
  console.log(message);
  return res.send("post crud");
});
let displayGetCrud = asyncHandler(async (req, res) => {
  let dataUser = await CrudServices.getAllUsers()
  return res.render("main", {data: {title: "Display Crud", page: "displayCrud", rows: dataUser}})
})

module.exports = {
  getHomePage,
  getCrud,
  postCrud,
  displayGetCrud,
};
