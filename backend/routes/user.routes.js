const { authUser, registerUser, allUsers } = require("../controllers/user.controllers")

const express = require("express")
const { protect } = require("../middlewares/authMiddleware")
const router = express.Router()


router.route("/").post(registerUser).get(protect, allUsers)

router.route("/login").post(authUser)

module.exports = router