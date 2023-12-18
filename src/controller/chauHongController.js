import pool from "../configs/connectDB";

let getAllChauHong = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `chauHong` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllChauHong,
};
