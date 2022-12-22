import { Router } from "express";

import auth from './auth.js'

const authRoutes = Router()

export default authRoutes
    .get('/admin' , auth.GET)
    .post('/login' , auth.POST)
