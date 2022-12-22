import { fetchData } from "../../utils/postgres.js"
 
const BANKS = `SELECT * FROM banks`

const CALC_BANKS = `
SELECT 
	b.bank_name,
	b.upto AS upta,
	b.mortage_duration,
	b.starting_payment As startPay,
	r.price_meter_square * r.meter_square AS price,
	(r.price_meter_square * r.meter_square) * b.starting_payment/100 AS start_pay,
	b.upto / (b.mortage_duration * 12) AS monthly
FROM
    rooms r
inner JOIN 
	banks b
on
	b.bank_id != r.room_id
GROUP BY b.bank_name,
	b.upto,
	b.mortage_duration ,r.room_number ,r.room_id ,r.price_meter_square , r.meter_square ,b.starting_payment
HAVING
	b.mortage_duration = $1 and r.room_id = $2 and r.price_meter_square * r.meter_square < b.upto 
ORDER BY 
	upta ,startPay;
`

const ADD_BANK = `call addbank($1 , $2 , $3 , $4 )` 

const UPDATE_BANK = `CALL Updatebank($1 , $2 , $3 , $4 , $5)`

const DELETE_BANK = `CALL deleteBank($1)`

export const banks = () => fetchData(BANKS)

export const calcBanks = (mortage_duration , room_id) => fetchData(CALC_BANKS , mortage_duration , room_id)


export const addBank = (name , upto , Mortage_duration , starting_payment) => fetchData(ADD_BANK , name , upto , Mortage_duration , starting_payment) 

export const updateBank = (name , upto , Mortage_duration , starting_payment ,idd) => fetchData(UPDATE_BANK, name , upto , Mortage_duration , starting_payment, idd)

export const deleteBank = (id) => fetchData(DELETE_BANK , id)
