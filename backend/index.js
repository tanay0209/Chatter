const express = require('express')
const dotenv = require("dotenv")
const app = express()
const userRoutes = require('./routes/user.routes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware.js')
const dbConnection = require("./config/db.js")
const chatRoutes = require("./routes/chat.route.js")
const messageRoutes = require("./routes/message.route.js")
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))
dotenv.config()

const PORT = process.env.PORT_NUMBER || 5000

app.use(express.json())

dbConnection()

app.get('/', (req, res) => {
    res.send("Server running")
})



app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/messages", messageRoutes)

app.use(notFound)
app.use(errorHandler)

const server = app.listen(PORT, console.log("Server running on 5000"))

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on("connection", (socket) => {
    socket.on("setup", (userData) => {
        socket.join(userData._id)
        socket.emit("connected")
    })
    socket.on("join room", (roomId) => {
        socket.join(roomId)
    })

    socket.on("typing", (room) => {
        socket.in(room).emit("typing")
    })
    socket.on("stop typing", (room) => {
        socket.in(room).emit("stop typing")
    })

    socket.on("new message", (newMessageRecieved) => {
        let chat = newMessageRecieved.chat
        if (!chat.users) return console.log("chat.users not defined");

        chat.users.forEach(user => {
            if (user._id == newMessageRecieved.sender._id) return;

            socket.in(user._id).emit("message recieved", newMessageRecieved)
        })
    })

    socket.off("setup", () => {
        socket.leave(userData._id)
    })
})