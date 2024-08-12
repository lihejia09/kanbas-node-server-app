import * as dao from "./dao.js";

// import db from "../Database/index.js";
export default function ModuleRoutes(app) {

  const createModule = async (req, res) => {
    const { courseId } = req.params;
    const { name, ...rest } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Module name cannot be empty." });
    }

    const newModule = {
      ...req.body,
      course: courseId,
    };

    try {
      const status = await dao.createModule(newModule);
      res.status(201).json(status);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  }


  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.mid);
    res.json(module);
  }


  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  }

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  }

  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.get("/api/modules/:mid", findModuleById);
  // app.get("/api/modules", findAllModules);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
}


// app.put("/api/modules/:mid", (req, res) => {
//   const { mid } = req.params;
//   const moduleIndex = db.modules.findIndex(
//     (m) => m._id === mid);
//   db.modules[moduleIndex] = {
//     ...db.modules[moduleIndex],
//     ...req.body
//   };
//   res.sendStatus(204);
// });

// app.delete("/api/modules/:mid", (req, res) => {
//   const { mid } = req.params;
//   db.modules = db.modules.filter((m) => m._id !== mid);
//   res.sendStatus(200);
// });

// app.post("/api/courses/:cid/modules", (req, res) => {
//   const { cid } = req.params;
//   const newModule = {
//     ...req.body,
//     course: cid,
//     _id: new Date().getTime().toString(),
//   };
//   db.modules.push(newModule);
//   res.send(newModule);
// });

// app.get("/api/courses/:cid/modules", (req, res) => {
//   const { cid } = req.params;
//   const modules = db.modules.filter((m) => m.course === cid);
//   res.json(modules);
// });
