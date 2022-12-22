import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { Errorhandler } from "../exseptions/ErrorHandler.js"
import { fetchData } from '../utils/postgres.js'

dotenv.config()

export default (req,res,next ) => {
    const {access_token } = req.headers

    jwt.verify(access_token ,process.env.SECRET_KEY ,async (err , decode) => {
        if(err instanceof jwt.JsonWebTokenError) {
            return next(new Errorhandler("Invalid token" ,401)) 
        }

        const [LogoutStatus] = await fetchData('SELECT token_status FROM users where id = $1' , decode.id)

        if(!!LogoutStatus){
            return next( new Errorhandler('Already logged out' ,409))
        }
        console.log(LogoutStatus);

        req.id = decode.id
        next()
        
    })
}