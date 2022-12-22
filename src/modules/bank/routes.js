import { Router } from "express";
import bank from "./bank.js";
import validation from "../../middleware/validation.js"
import { AddBankPostSchema, BankUpdateSchema } from "../../validation/validation.js";
import verify from "../../middleware/verify.js"



const bankRoutes = Router()

export default  bankRoutes
    .get('/Banks' , bank.GET)
    .get('/BanksCalc' , bank.GET_CHANGE_SELECT)
    .post('/addBank' , verify , validation(AddBankPostSchema) , bank.POST)
    .put('/updateBank/:id' ,verify,  validation(BankUpdateSchema) ,  bank.PUT)
    .delete('/deleteBank/:id' , verify , bank.DELETE)


