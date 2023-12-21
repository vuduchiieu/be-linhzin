import express from "express";
import initAPIGhiChu from "./route/APIGhiChu";

require("dotenv").config();

const app = express();
const port = 3001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initAPIGhiChu(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
