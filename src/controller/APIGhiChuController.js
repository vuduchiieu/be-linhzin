import pool from "../configs/connectDB";

let getAllGhiChu = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `ghichu` ");

    return res.status(200).json({
        data: rows,
    });
};

let getGhiChu = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    const [rows, fields] = await pool.execute(
        `select * from ghichu where id = ?`,
        [userId]
    );
    return res.status(200).json({
        data: rows,
    });
};

let createGhiChu = async (req, res) => {
    let { title, desc } = req.body;
    if (!title || !desc) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute("INSERT INTO `ghichu`( `title`, `desc`) VALUES (?, ?)", [
        title,
        desc,
    ]);
    return res.status(200).json({
        message: "ok",
    });
};

let updateGhiChu = async (req, res) => {
    let { title, desc, id } = req.body;
    if (!title || !desc) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute(
        "update `ghichu` set `title`= ?, `desc`= ? where `id` = ?",
        [title, desc, id]
    );
    return res.status(200).json({
        message: "ok",
    });
};

let deleteGhiChu = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute("delete from ghichu where id = ?", [userId]);
    return res.status(200).json({
        message: "ok",
    });
};

module.exports = {
    getAllGhiChu,
    getGhiChu,
    createGhiChu,
    updateGhiChu,
    deleteGhiChu,
};
