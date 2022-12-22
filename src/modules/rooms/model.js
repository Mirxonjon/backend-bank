import { fetchData } from "../../utils/postgres.js"

const ALL_ROOMS = `
SELECT
    r.room_id,
    r.room_number,
    r.meter_square,
    r.price_meter_square,
    r.address ,
    pr.project_name,
	pr.project_id
FROM
    projects pr
RIGHT JOIN
    rooms r
ON
    r.project_id = pr.project_id
`
const CHANGE_ROOMS =    `
SELECT 
    pr.project_id,
    pr.project_name,
    cm.company_id ,
    cm.company_name,
    r.room_number,
    r.room_id
FROM
    companies cm
INNER JOIN
    projects pr
ON 
    cm.company_id = pr.company_id 
INNER JOIN
    rooms r
ON
    r.project_id = pr.project_id where pr.project_id = $1
`
const FIND_ROOM =  `
    SELECT * FROM rooms WHERE room_id = $1
`

const ADD_ROOM =`CALL addRoom($1 ,$2 ,$3 ,$4 ,$5)`

const UPDATE_ROOM =`CALL updateRoom($1 ,$2 ,$3 ,$4 ,$5 , $6)`

const DELETE_ROOM = `CALL deleteRoom($1)`

export const rooms = () => fetchData(ALL_ROOMS)

export const changeRooms = (project_id) => fetchData(CHANGE_ROOMS , project_id )

export const findRoom = (room_id) => fetchData(FIND_ROOM , room_id )


export const addRoom = (rooms ,meter_square , price ,address , project_id) => fetchData(ADD_ROOM ,rooms ,meter_square , price ,address , project_id )

export const updateRoom = (rooms ,meter_square , price ,address , project_id ,id) => fetchData(UPDATE_ROOM, rooms ,meter_square , price ,address , project_id ,id )

export const deleteRoom = ( id) => fetchData(DELETE_ROOM ,id )

