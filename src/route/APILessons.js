import express from "express";
import cors from "cors";
import APILessonsController from "../controller/APILessonsController";
import chauHongController from "../controller/chauHongController";
import chiDuoiController from "../controller/chiDuoiController";
import chiTrenController from "../controller/chiTrenController";
import dauMatCoController from "../controller/dauMatCoController";
import longNgucController from "../controller/longNgucController";
import thanKinhTrungUongController from "../controller/thanKinhTrungUongController";

let router = express.Router();

const initAPILessons = (app) => {
    app.use(cors());
    router.get("/lessons", APILessonsController.getAllLessons);
    router.get("/lesson/chauhong", chauHongController.getAllChauHong);
    router.get("/lesson/chiduoi", chiDuoiController.getAllChiDuoi);
    router.get("/lesson/chitren", chiTrenController.getAllChiTren);
    router.get("/lesson/daumatco", dauMatCoController.getAllDauMatCo);
    router.get("/lesson/longnguc", longNgucController.getAllLongNguc);
    router.get(
        "/lesson/tktw",
        thanKinhTrungUongController.getAllThanKinhTrungUong
    );
    return app.use("/api/v1/", router);
};

export default initAPILessons;
