import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: String,
    description: String,
    // course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModel' },
    course: { type: String },
    lessons: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
            name: { type: String, required: true },
            description: String,
        }
    ]
}, { collection: "modules" });

export default moduleSchema;

