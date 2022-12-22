import { fetchData } from "../../utils/postgres.js"

const ALL_COMPANIES = `SELECT * from companies `

const ADD_COMPANY =`CALL addCompany($1 ,$2)`

const UPDATE_COMPANY =`CALL updateCompany($1 ,$2 ,$3)`

const DELETE_COMPANY = `CALL deleteCompany($1)`

export const companies = () => fetchData(ALL_COMPANIES)

export const addCompany = (name , img) => fetchData(ADD_COMPANY , name ,img )

export const updateCompany = (name , img ,id) => fetchData(UPDATE_COMPANY , name ,img ,id )

export const deleteCompany = ( id) => fetchData(DELETE_COMPANY ,id )

