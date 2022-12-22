import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
// console.log(process.env.SECRET_KEY , 'sign okkkkkkk');

export const sign = payload => jwt.sign(payload ,process.env.SECRET_KEY) 