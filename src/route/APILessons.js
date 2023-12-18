import express from "express";
import cors from "cors";
import APILessonsController from "../controller/APILessonsController";

let router = express.Router();

const initAPILessons = (app) => {
    app.use(cors());
    router.get("/lessons", APILessonsController.getAllLessons);
    return app.use("/api/v1/", router);
};

export default initAPILessons;
