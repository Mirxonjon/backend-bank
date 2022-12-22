import { Errorhandler } from "../../exseptions/ErrorHandler.js"
import { addProject, allProjects, changeProjects, deleteProject, updateProject } from "./model.js"


export default{
    GET : async (_ , res , next) => {

        const Projects = await  allProjects().catch(err => next(new Errorhandler(err.message , 500)))

        if(Projects){
            res.status(200).json({
                status:200,
                message: 'All projects',
                data: Projects
            })
        } 

    },
    GET_CHANGE_PROJECT : async ( req, res , next) => {
        const { company_id } = req.query
        
        const Projects = await  changeProjects(company_id).catch(err => next(new Errorhandler(err.message , 500)))

        if(Projects){
            res.status(200).json({
                status:200,
                message: 'Projects',
                data: Projects
            })
        } 

    },
    
    POST : async (req ,res, next) => {
        const { name , company_id }  = req.body

        const newProject = await addProject(name ,company_id).catch(err => next(new Errorhandler(err.message ,500)))

        if(newProject){
            res.status(201).json({
                status: 201 ,
                message: 'Project Created'
            })
        }

    },

    PUT : async (req ,res, next ) => {
        const {id} = req.params
        const { name , company_id }  = req.body
        const UpdateProject = await updateProject(name ,company_id ,id).catch(err => next(new Errorhandler(err.message ,500)))

        if(UpdateProject){
            res.status(200).json({
                status: 200 ,
                message: 'Project Update'
            })
        }
    },

    DELETE : async (req, res, next) => {
        const {id} = req.params

        const DeleteProject = deleteProject(id).catch(err => next(new Errorhandler(err.message , 500)))

        if (DeleteProject) {
            res.status(200).json({
                status: 200 ,
                message: 'Project Deleted'
            })
        }
    }
}