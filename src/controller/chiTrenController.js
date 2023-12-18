import pool from "../configs/connectDB";

let getAllChiTren = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `chiTren` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllChiTren,
};
