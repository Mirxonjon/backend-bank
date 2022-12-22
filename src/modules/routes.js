import { Router } from "express";

import bank from "./bank/routes.js"
import auth from  "./auth/routes.js"
import company from "./company/routes.js"
import project from './project/routes.js'
import room from './rooms/routes.js' 

const router = Router() 

export default router
    .use('/v1', bank , auth , company , project ,room)
    