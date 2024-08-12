import model from "./model.js";

export const createCourse = (course) => {
    delete course._id
    return model.create(course);
}

export const fetchAllCourses = () => model.find();

export const updateCourse = (courseID, course) => model.updateOne({ _id: courseID }, { $set: course });

export const deleteCourse = (courseID) => model.deleteOne({ _id: courseID });
