import mongoose from "mongoose";

const inputSchema = {
    name: String,
    phone: Number,
    email: String,
    message: String
}

const Input = mongoose.model("Input", inputSchema);

export default Input;

