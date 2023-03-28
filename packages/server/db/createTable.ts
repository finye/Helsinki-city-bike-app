import pool from "./db-config";

const createTableIfNotExists = async (tableName: string, query: string) => {
    const client = await pool.connect();
    try {
        // Check if table exists
        const checkTableQuery = `SELECT EXISTS (
            SELECT 1
            FROM   information_schema.tables 
            WHERE  table_name = '${tableName}'
        );`;
        const result = await client.query(checkTableQuery);
        const tableExists = result.rows[0].exists;

        // Create table if it doesn't exist
        if (!tableExists) {
            const createTableQuery = query;

            await client.query(createTableQuery);
            console.log('Table created successfully!');
        } else {
            console.log('Table already exists!');
        }
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }
}

export default createTableIfNotExists