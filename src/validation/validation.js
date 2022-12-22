import Joi from 'joi'


export const AddBankPostSchema = Joi.object({
    name: Joi.string().required().max(124),
    upto: Joi.number().required().max(10000000000),
    Mortage_duration: Joi.number().required().max(15) ,
    starting_payment : Joi.number().required().max(99)
}).required()

export const BankUpdateSchema = Joi.object({
    name: Joi.string().max(124),
    upto: Joi.number().max(10000000000),
    Mortage_duration: Joi.number().max(15) ,
    starting_payment : Joi.number().max(99)
}).required()

export const CompanyPostSchema = Joi.object({
    name : Joi.string().required().max(64),
    img: Joi.string().required().max(125)
}).required()

export const CompanyUpdateSchema = Joi.object({
    name : Joi.string().max(64),
    img: Joi.string().max(125)
}).required()

export const ProjectsPostSchema = Joi.object({
    name : Joi.string().required().max(124),
    company_id: Joi.string().required()
}).required()

export const ProjectsUpdateSchema = Joi.object({
    name : Joi.string().max(124),
    company_id: Joi.string()
}).required()

export const RoomsPostSchema = Joi.object({
    rooms: Joi.number().required().max(100),
    meter_square: Joi.number().required().max(100000),
    price : Joi.number().required().max(1000000000000),
    address: Joi.string().required().max(124),
    project_id: Joi.string().required() 
}).required()

export const RoomsUpdateSchema = Joi.object({
    rooms: Joi.number().max(100),
    meter_square: Joi.number().max(100000),
    price : Joi.number().max(1000000000000),
    address: Joi.string().max(124),
    project_id: Joi.string() 
}).required()