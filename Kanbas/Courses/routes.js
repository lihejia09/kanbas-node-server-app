// import Database from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {

  const createCourse = async (req, res) => {
    const course = {
      ...req.body
    };
    const status = await dao.createCourse(course);
    res.json(status);
  }

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  }

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
  };

  const fetchAllCourses = async (req, res) => {
    const courses = await dao.fetchAllCourses();
    res.json(courses);
  }


  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:id", updateCourse)
  app.get("/api/courses", fetchAllCourses);

}

// export default function CourseRoutes(app) {
//   app.put("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = req.body;
//     Database.courses = Database.courses.map((c) =>
//       c._id === id ? { ...c, ...course } : c
//     );
//     res.sendStatus(204);
//   });

//   app.delete("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     Database.courses = Database.courses.filter((c) => c._id !== id);
//     res.sendStatus(204);
//   });

//   app.post("/api/courses", (req, res) => {
//     const course = {
//       ...req.body,
//       _id: new Date().getTime().toString()
//     };
//     Database.courses.push(course);
//     res.send(course);
//   });

//   app.get("/api/courses", (req, res) => {
//     const courses = Database.courses;
//     res.send(courses);
//   });
// }
