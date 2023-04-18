import mongoose from "mongoose";

export const katasEntity = () => {
    let katasSchema = new mongoose.Schema(
        {
            name: String,
            description: String,
            level: Number,
            user: Object,
            date: Date,
            valoration: Number,
            attempts: Number
        }
    )
    return mongoose.model("katas", katasSchema);
}