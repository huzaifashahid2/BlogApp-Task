import express from 'express';
import cors from 'cors';
import connectDb from './Lib/connectDb.js';
import dotenv from 'dotenv';
import authroutes from './Route/auth.route.js';
dotenv.config();
const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/users', authroutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb()
});