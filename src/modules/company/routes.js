import { Router } from "express";
import company from "./company.js";
import validation from '../../middleware/validation.js'
import {  CompanyPostSchema, CompanyUpdateSchema } from "../../validation/validation.js";
import verify from "../../middleware/verify.js"




const companyRoutes = Router()

export default  companyRoutes
    .get('/companies' , company.GET)
    .post('/addCompany' , verify , validation(CompanyPostSchema) ,company.POST)
    .put('/updateCompany/:id' ,verify ,  validation(CompanyUpdateSchema) ,  company.PUT)
    .delete('/deleteCompany/:id' , verify , company.DELETE)

