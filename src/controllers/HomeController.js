import asyncHandler from "express-async-handler";
import db from "../models/index";
import CrudServices from "../services/CrudServices";
let getHomePage = asyncHandler(async (req, res) => {
  try {
    let dataUser = await db.User.findAll();
    return res.render("main", { data: { title: "This is home page" } });
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
let getEditCrud = asyncHandler(async (req,res) => {
  let userId = req.query.id;
  console.log(userId)
  if(userId){
    let userData = await CrudServices.getUserInfoById(userId)
    return res.render("main", {data: {title: "Edit Crud", page: "editCrud", rows: userData}})
  }else{
    res.send("user not found")
  }  
});
let putCrud = asyncHandler(async (req,res) => {
  let data = req.body;
  await CrudServices.updateUserData(data)
  return res.redirect("/get-crud")
});

module.exports = {
  getHomePage,
  getCrud,
  postCrud,
  displayGetCrud,
  getEditCrud,
  putCrud,
};
