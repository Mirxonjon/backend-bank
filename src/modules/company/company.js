import { addCompany, companies, deleteCompany, updateCompany } from "./model.js"
import { Errorhandler } from "../../exseptions/ErrorHandler.js";


export default {
    GET: async( _ ,res , next) => {

        const allCompanies = await companies().catch(err => next(new Errorhandler(err.message , 500)))

        if(allCompanies ){
            res.status(200).json({
                status: 200 ,
                message :'All  companies' ,
                data: allCompanies
            })
        }

    } ,

    POST : async(req ,res , next) => {
        const {name , img } = req.body
        
        const newCompany = await addCompany(name ,img).catch(err => next(new Errorhandler(err.message , 500))) 

        if(newCompany){
            res.status(201).json({
                status: 201,
                message: "Company created"
            })
        }
    },

    PUT: async (req , res , next) => {
        const {id} = req.params
        const {name , img } = req.body

        const UpdatedCompany = await updateCompany(name , img , id).catch(err => next(new Errorhandler(err.message,500)))

        if(UpdatedCompany){
            res.status(200).json({
                status: 200 ,
                message: "Company updated"
            })
        }
    },

    DELETE: async (req , res ,next) => {
        const {id} = req.params

        const DeletedCompany = await deleteCompany(id).catch(err => next(new Errorhandler(err.message , 500)))

        if(DeletedCompany){
            res.status(200).json({
                status:200 ,
                message: 'Company deleted'
            })
        }
    }

    

}