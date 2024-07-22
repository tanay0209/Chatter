const mongoose = require("mongoose")

const connection = {}

const dbConnection = async () => {
    try {
        if (connection.isConnected) {
            return
        }
        const db = await mongoose.connect(process.env.MONGODB_URI)
        connection.isConnected = db.connections[0].readyState
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        process.exit()
    }
}

module.exports = dbConnection