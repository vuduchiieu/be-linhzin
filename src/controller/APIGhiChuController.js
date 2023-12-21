import pool from "../configs/connectDB";

let getAllGhiChu = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `ghichu` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllGhiChu,
};
