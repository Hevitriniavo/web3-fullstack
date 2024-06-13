import express, { Application } from "express";
import bodyParser from "body-parser";
import path from 'path';
import cors from "cors"
import carRouter from "../routes/car.router";
import userRouter from "../routes/user.router";

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/cars", carRouter);
app.use("/users", userRouter);

app.use(express.static(path.join(__dirname, '../../public')));

export default app;