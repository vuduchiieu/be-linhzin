import express from "express";
import cors from "cors";
import APIGhiChuController from "../controller/APIGhiChuController";

let router = express.Router();

const initAPIGhiChu = (app) => {
    app.use(cors());
    router.get("/ghichus", APIGhiChuController.getAllGhiChu);
    router.get("/ghichu/:id", APIGhiChuController.getAllGhiChu);
    router.post("/create", APIGhiChuController.createGhiChu);
    router.put("/update", APIGhiChuController.updateGhiChu);
    router.delete("/delete/:id", APIGhiChuController.deleteGhiChu);
    return app.use("/api/v1/", router);
};

export default initAPIGhiChu;
