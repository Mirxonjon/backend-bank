import { Errorhandler } from "../../exseptions/ErrorHandler.js";
import { addBank, banks, calcBanks, deleteBank, updateBank  } from "./model.js"

export default {
    GET: async(req ,res, next) => {

        const allBanks =  await banks().catch(err => next(new Errorhandler(err.message , 500)))

        if(allBanks){
            res.status(200).json({
                status:200 ,
                message: 'All banks',
                data: allBanks
            })

        }
    },

    GET_CHANGE_SELECT: async(req ,res, next) => {
        const {roomId , mortageDuration } = req.query
        const allBanks =  await calcBanks(mortageDuration , roomId).catch(err => next(new Errorhandler(err.message , 500)))

        if(allBanks){
            res.status(200).json({
                status:200 ,
                message: 'Calc banks',
                data: allBanks
            })

        }
    },



    POST: async(req ,res ,next ) => {
          const {name , upto , Mortage_duration , starting_payment } = req.body

        const newBank = await addBank(name , upto , Mortage_duration , starting_payment).catch(err => next( new Errorhandler(err.message , 503)))
        
        if(newBank){
            res.status(201).json({
                status:201 ,
                message: 'Bank created'
            })
        }
    },

    PUT : async (req ,res , next) => {
        const {id} = req.params   
        const { name , upto , Mortage_duration , starting_payment } = req.body

        

        const UpdateBank = await updateBank(name , upto , Mortage_duration , starting_payment ,id).catch(err => next( new Errorhandler(err.message , 503)))
        
        if (UpdateBank) {
            res.json({
                message : "Bank updated" ,
                status : 200 
            })
        }
    } ,

    DELETE : async (req , res ,next) => {
        const {id} = req.params

        const DeleteBank = await deleteBank(id).catch(err => next(new Errorhandler(err.message , 500)))
        if(DeleteBank){
            res.json({
                message: 'Bank deleted',
                status : 200
            })
        }
        
    }

}
