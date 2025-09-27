
import cors from 'cors';
import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Learning Management System"
    })
})

export default app;