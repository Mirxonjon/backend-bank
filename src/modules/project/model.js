import { fetchData } from "../../utils/postgres.js"


const ALL_PROJECTS =`
    SELECT
        pr.project_id,
        pr.project_name,
        cp.company_name
    FROM
        companies cp
    RIGHT JOIN
        projects pr
    ON
        cp.company_id = pr.company_id
`
const CHANGE_PROJECTS =`
SELECT 
		pr.project_id,
		pr.project_name,
		cm.company_id ,
		cm.company_name,
        cm.company_img
FROM
	companies cm
INNER JOIN
	projects pr
ON 
	cm.company_id = pr.company_id where cm.company_id = $1
`

const ADD_PROJECT = `CALL addProject($1,$2)`

const UPDATE_PROJECT = `CALL updateProject($1 ,$2 ,$3)`

const DELETE_PROJECT = `CALL deleteProject($1)`

export const allProjects = () => fetchData(ALL_PROJECTS)
export const changeProjects = (company_id) => fetchData(CHANGE_PROJECTS , company_id)

export const addProject = (name , company_id ) => fetchData(ADD_PROJECT ,name, company_id)
export const  updateProject = (name , company_id , id) => fetchData(UPDATE_PROJECT , name , company_id ,id)
export const deleteProject = (id) => fetchData(DELETE_PROJECT , id)




