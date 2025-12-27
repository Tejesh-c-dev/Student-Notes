const User = require("../models/user");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { isStrong } = require("../utilits/validators");


const register = async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;

  if (!username || !email || !password || !confirmpassword){
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!validator.isEmail(email)){
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (password !== confirmpassword){
    return res.status(400).json({ message: "Passwords do not match" });
  }
  if (!isStrong(password)){
    return res.status(400).json({ message: "Password is not strong enough" });
  }
  const exists = await User.findOne({ email });
  if (exists)
    return res.status(409).json({ message: "Email already in use" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({ message: "User does not exist" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(401).json({ message: "Invalid credentials" });

  res.status(200).json({ message: "Login successful" });
};
const changePassword = async (req, res) => {
    try {
      const { email, oldPassword, newPassword } = req.body;
  
      if (!email || !oldPassword || !newPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const match = await bcrypt.compare(oldPassword, user.password);
      if (!match) {
        return res.status(401).json({ message: "Old password is incorrect" });
      }
  
      if (!isStrong(newPassword)) {
        return res.status(400).json({ message: "New password is not strong enough" });
      }
  
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedNewPassword;
      await user.save();
  
      res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Error changing password:", error);  
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  







module.exports = { register, login,changePassword };
