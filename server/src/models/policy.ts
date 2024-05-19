import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description:  String,
    algorithm: { type: String, required: true },
    targets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Target" }],
});

export default mongoose.model("Policy", policySchema);