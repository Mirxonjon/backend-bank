import { Router } from "express";
import project from "./project.js";
import validation from '../../middleware/validation.js'
import { ProjectsPostSchema, ProjectsUpdateSchema } from "../../validation/validation.js";
import verify from "../../middleware/verify.js"




const projectRoutes = Router()

export default  projectRoutes
    .get('/projects' , project.GET)
    .get('/projectsOnchange' , project.GET_CHANGE_PROJECT)
    .post('/addProject' , verify , validation(ProjectsPostSchema) , project.POST)
    .put('/updateProject/:id' ,verify , validation(ProjectsUpdateSchema) ,  project.PUT)
    .delete('/deleteProject/:id' , verify , project.DELETE)

