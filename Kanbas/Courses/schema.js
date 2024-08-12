import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    _id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
    number: String,
    name: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String
},
    { collection: "courses" }
);

export default courseSchema;