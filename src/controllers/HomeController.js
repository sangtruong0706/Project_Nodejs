import asyncHandler from "express-async-handler";
import db from "../models/index";
const homePage = asyncHandler(async (req, res) => {
  try {
    let dataUser = await db.User.findAll();
    return res.render("main", { data: JSON.stringify(dataUser),  title: "This is home page"  });
  } catch (e) {
    console.log(e);
  }
  
});

module.exports = {
  homePage,
};
