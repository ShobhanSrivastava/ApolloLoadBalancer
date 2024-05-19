import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

async function connectDB() {
    await mongoose.connect(MONGODB_URI);
}

export default connectDB;