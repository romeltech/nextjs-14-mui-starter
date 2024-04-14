import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("connected to DB");
    } catch (error) {
        console.log("can't connect to DB: " + error);
        throw new Error(error);
    }
};
