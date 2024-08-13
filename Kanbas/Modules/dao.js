import model from "./model.js";
import mongoose from "mongoose";

export const createModule = (module) => {
    delete module._id;
    return model.create(module);
}

export const findAllModules = () => model.find().populate('course');
export const findModuleById = (moduleId) => model.findById(moduleId).populate('course');
export const findModulesForCourse = async (cid) => await model.find({ course: cid });
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
// export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const deleteModule = (moduleId) => model.deleteOne({ _id: new mongoose.Types.ObjectId(moduleId) });