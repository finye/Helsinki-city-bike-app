import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const port: number | undefined = parseInt(process.env.DB_PORT || '', 10);


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port,
    database: process.env.DB_NAME,
});

export default pool;