import { Router } from "express";
import room from "./room.js";
import validation from '../../middleware/validation.js'
import {  RoomsPostSchema, RoomsUpdateSchema } from "../../validation/validation.js";
import verify from "../../middleware/verify.js"




const roomRoutes = Router()

export default  roomRoutes
    .get('/Rooms' , room.GET)
    .get('/RoomsChange' , room.GET_CHANGE_ROOMS)
    .get('/RoomsChangeFind' , room.GET_CHANGE_ROOM_FIND)
    .post('/addRoom' , verify , validation(RoomsPostSchema) , room.POST)
    .put('/updateRoom/:id' ,verify , validation(RoomsUpdateSchema) ,  room.PUT)
    .delete('/deleteRoom/:id' , verify , room.DELETE)

