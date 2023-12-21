import express from "express";
import cors from "cors";
import APIGhiChuController from "../controller/APIGhiChuController";

let router = express.Router();

const initAPIGhiChu = (app) => {
    app.use(cors());
    router.get("/ghichu", APIGhiChuController.getAllGhiChu);

    return app.use("/api/v1/", router);
};

export default initAPIGhiChu;
