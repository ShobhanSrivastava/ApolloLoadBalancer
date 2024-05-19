import mongoose from "mongoose";

const targetSchema = new mongoose.Schema({
    host: String,
    port: Number,
    health_endpoint: String,
    name: String
});

export default mongoose.model("Target", targetSchema);