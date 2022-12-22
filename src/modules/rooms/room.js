import { Errorhandler } from "../../exseptions/ErrorHandler.js"
import { addRoom, changeRooms, deleteRoom, findRoom, rooms, updateRoom } from "./model.js"

export default{
    GET: async (_ ,res, next) => {

        const allRooms = await rooms().catch(err => next(new Errorhandler(err.message ,500)))
        if (allRooms) {
            res.status(200).json({
                status:200 ,
                message: 'all Rooms',
                data: allRooms
            })
        } 
    },
    GET_CHANGE_ROOMS: async (req ,res, next) => {
            const {project_id} =req.query
        const allRooms = await changeRooms(project_id).catch(err => next(new Errorhandler(err.message ,500)))
        if (allRooms) {
            res.status(200).json({
                status:200 ,
                message: 'Change Rooms',
                data: allRooms
            })
        } 
    },

    GET_CHANGE_ROOM_FIND: async (req ,res, next) => {
        const {room_id} =req.query

    const allRooms = await findRoom(room_id).catch(err => next(new Errorhandler(err.message ,500)))
    
    if (allRooms) {
        res.status(200).json({
            status:200 ,
            message: 'Change Rooms',
            data: allRooms
        })
    } 
},

    POST : async (req ,res ,next) => {
        const {rooms ,meter_square , price ,address , project_id} = req.body

        const newRoom = await addRoom(rooms ,meter_square , price ,address , project_id).catch(err => next(new Errorhandler(err.message ,500)))

        if(newRoom){
            res.status(201).json({
                status:201 ,
                message: 'Room created'
            })
        }

    },

    PUT :async (req, res, next) => {
        const {id} = req.params
        const {rooms ,meter_square , price ,address , project_id} = req.body
     
        const UpdateRoom = await updateRoom(rooms ,meter_square , price ,address , project_id ,id).catch(err => next(new Errorhandler(err.message ,500)))
        
        if(UpdateRoom){
            res.status(200).json({
                status:200 ,
                message: 'Room updated'
            })
        }
    } ,

    DELETE: async(req ,res, next) => {
        const {id} = req.params

        const DeleteRoom = await deleteRoom(id).catch(err => next(new Errorhandler(err.message ,500)))

        if(DeleteRoom){
            res.status(200).json({
                status: 200,
                message: 'Room deleted'
            })
        }
    }
}