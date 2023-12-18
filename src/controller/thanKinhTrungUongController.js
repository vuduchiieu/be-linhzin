import pool from "../configs/connectDB";

let getAllThanKinhTrungUong = async (req, res) => {
    const [rows, fields] = await pool.execute(
        "SELECT * FROM `thanKinhTrungUong` "
    );

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllThanKinhTrungUong,
};
