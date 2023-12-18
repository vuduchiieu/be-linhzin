import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "bxyukjnppvgn4qr4dopf-mysql.services.clever-cloud.com",
    user: "uvtaib3xt6q4yse1",
    password: "VF4LcEMKF5YKfq1mmJ15",
    database: "bxyukjnppvgn4qr4dopf",
    port: 3306,
});

export default pool;
