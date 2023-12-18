import express from "express";
import initAPILessons from "./route/APILessons";

require("dotenv").config();

const app = express();
const port = 3001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initAPILessons(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
