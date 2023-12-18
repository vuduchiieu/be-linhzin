import pool from "../configs/connectDB";

let getAllDauMatCo = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `dauMatCo` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllDauMatCo,
};
