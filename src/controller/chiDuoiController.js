import pool from "../configs/connectDB";

let getAllChiDuoi = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `chiDuoi` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllChiDuoi,
};
