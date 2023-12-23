import express from "express";
import cors from "cors";
import {
    createGhiChu,
    deleteGhiChu,
    getAllGhiChu,
    getGhiChu,
    initSocketIO,
    updateGhiChu,
} from "../controller/APIGhiChuController";

let router = express.Router();

const initAPIGhiChu = (app, io) => {
    initSocketIO(io);
    app.use(cors());
    router.get("/ghichus", getAllGhiChu);
    router.get("/ghichu/:id", getGhiChu);
    router.post("/create", createGhiChu);
    router.put("/update", updateGhiChu);
    router.delete("/delete/:id", deleteGhiChu);
    return app.use("/api/v1/", router);
};

export default initAPIGhiChu;
