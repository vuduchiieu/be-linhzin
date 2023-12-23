import express from "express";
import initAPIGhiChu from "./route/APIGhiChu";
import http from "http";
import { Server } from "socket.io";

require("dotenv").config();

const app = express();
const port = 3001 || process.env.PORT;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initAPIGhiChu(app, io);

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
