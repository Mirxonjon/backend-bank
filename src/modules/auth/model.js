
import { fetchData } from "../../utils/postgres.js"

const LOG_IN  = `
 select * from admins where admin_name = $1 AND password = crypt($2 , password)  ;
`

export  const logIn = (name ,password) => fetchData(LOG_IN , name ,password)