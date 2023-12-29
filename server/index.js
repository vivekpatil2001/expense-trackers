import express from "express";
import mongoose from "mongoose";
import {getUser, loginUser, addUser} from './controllers/user.js'
import { addTransaction, getAllTransaction } from "./controllers/transaction.js";
import dotenv from "dotenv"
dotenv.config();



const app = express();
app.use(express.json());

const PORT = 5000 || process.env.PORT

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    if (conn) {
        console.log('MongoDB connected')
    }
};
connectDB();

app.get('/health', async (req, res) => {
    res.json({
        succes: true,
        message: "servere is running"
    })
});

app.post('/api/v1/signups', addUser);

//login

app.post('/api/v1/logins', loginUser);

//get/users

app.get('/api/v1/users', getUser)

//post transaction
app.post('/api/transaction', addTransaction)

//*gettransaction*//
app.get('/api/v1/transactions', getAllTransaction)




app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`)

})