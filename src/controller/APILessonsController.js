import pool from "../configs/connectDB";

let getAllLessons = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `lessons` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllLessons,
};
