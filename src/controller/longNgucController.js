import pool from "../configs/connectDB";

let getAllLongNguc = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `longNguc` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllLongNguc,
};
