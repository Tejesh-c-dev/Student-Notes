const express = require("express");
const router = express.Router();
const { home, notes, quiz, pyqs } = require("../controllers/pageController");
const { login, register ,changePassword} = require("../controllers/authController");

router.use(express.json());
// Page routes  
router.get("/", home);
router.get("/notes", notes);
router.get("/quiz", quiz);
router.get("/pyqs", pyqs);

// Auth routes
router.post("/login", login);
router.post("/register", register);
router.put("/change-password", changePassword);

module.exports = router;
