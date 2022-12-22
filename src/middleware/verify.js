import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { Errorhandler } from "../exseptions/ErrorHandler.js"
// import { fetchData } from '../utils/postgres.js'

dotenv.config()

export default (req, res ,next) => {
    const {access_token } = req.headers

    if(!access_token) {
        return next(new Errorhandler('Provided access token' , 401))
    }
    jwt.verify(access_token ,process.env.SECRET_KEY , async (err , decode) => {
        if(err instanceof jwt.JsonWebTokenError) {
            return next(new Errorhandler("Invalid token" , 401)) 
        }

     

        req.id = decode.id
        next()
        
    })
}
