/* eslint-disable no-console */

import mongoose from 'mongoose';
import app from './app';
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}`);

        console.log("Connected to DB!");

        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
