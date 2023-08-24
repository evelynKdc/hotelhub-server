const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/generate-jwt");
const User = require("../model/User");

const registerAuth = async (req = request, res = response) => {
  const { name, lastname, email, password, phone } = req.body;
  const user = new User({ name, lastname, email,  phone}); //create the model with the data from the body request

  //encrypting password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  //saving in database
  try {
    await user.save();
  } catch (error) {
    console.log(error);
    throw new Error(); 
  }
  res.json({
    user
  });
};
const loginAuth = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    //Verifying if email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        mssg: "Email is not in database",
      });
    }
    //Verifying if email is active
    if (!user.estatus) {
      return res.status(400).json({
        mssg: "Email is not active",
      });
    }
    //Verifying if password is correct
    const userPssd = bcryptjs.compareSync(password, user.password);
    if (!userPssd) {
      return res.status(400).json({
        mssg: "Password is incorrect",
      });
    }

    //Generating JWT
    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mssg: "something is wrong",
    });
  }
};

module.exports = {
  registerAuth,
  loginAuth,
};
