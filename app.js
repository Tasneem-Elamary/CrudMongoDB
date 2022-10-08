import * as indexRouter from './routes/index.router.js'
import express from 'express'
import connectDB from './DB/connection.js';
// import mongoose from 'mongoose';

const app = express();
const port = 3000
const baseUrl = '/api/v1'
app.use(express.json())
 app.use(`${baseUrl}/auth`, indexRouter.authRouter)
 app.use(`${baseUrl}/user`, indexRouter.userRouter)



connectDB()

app.listen(port, () => {
    console.log(`server is running on port ........${port}`);
})