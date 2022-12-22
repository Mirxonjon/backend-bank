import express  from "express";
import errorHandler from "./middleware/errorHandler.js";
import routes from "./modules/routes.js";
import cors from 'cors'

const PORT = process.env.PORT || 9000


    
    const app = express()
    
    app.use(cors({
        origin: 'http://127.0.0.1:5173',
        optionsSuccessStatus: 200
    }))
    app.use(express.json())
    app.use(routes)
    app.use(errorHandler)


app.listen(PORT , () => {
    console.log(PORT);
})
