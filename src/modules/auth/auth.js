import { logIn } from "./model.js"
import { Errorhandler} from '../../exseptions/ErrorHandler.js'
import {sign} from '../../utils/jwt.js'

export default {
    GET : (req , res , next ) => {
        res.json('admin')
    },

    POST : async (req ,res , next) => {

        const { name , password } = req.body
        const findUser =  await  logIn(name , password ).catch(err => next(new Errorhandler(err.message, 500)))

        if(findUser && findUser.length){
            const [user] = findUser
            res.status(200).json({
                message : "User found",
                status : 200 ,
                access_token: sign({id : user.uuid_id})
            })
        } else if (findUser ){
            res.status(404).json({
                message: "User not found" , 
                status: 404

            })
        }

    }

}