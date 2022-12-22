import pg from 'pg' ; 

import dotenv from 'dotenv'

dotenv.config()


const { Pool } = pg

const pool = new Pool({
    connectionString : process.env.CONNECTION_STRING
})

export const fetchData = async(SQL , ...params) => {
    const client =await pool.connect()
    try{
        const {rows} = await client.query(SQL , params.length ? params: null)
        return rows
    } finally{
        client.release()
    }
}

// export const fetchData = async (SQL , ...params) => {
//     const  client  = await pool.connect()
//     return new Promise((resolve ,reject) => {
//         client.query(SQL , params.length ? params : null , (err , result) => {
//             if(err) {
//                 return reject(err.message)
//             }

//             const {rows} = result

//             resolve(rows)
//             client.release()
//         })
//     })
// } 