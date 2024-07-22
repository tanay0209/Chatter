const express = require("express")

const router = express.Router()
const { protect } = require("../middlewares/authMiddleware")
const { allMessages, sendMessage } = require("../controllers/message.controller")

router.route("/").post(protect, sendMessage)
router.route("/:chatId").get(protect, allMessages)

module.exports = router