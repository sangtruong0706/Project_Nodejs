import UserServices from "../services/UserServices";

let handleLogin = async (req, res) => {
  // check email exists
  //compare password
  //return user info
  // access token: JWT
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing email or password",
    });
  }
  let userData = await UserServices.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {}
  });
};
module.exports = {
  handleLogin,
};
