import express, { Application } from "express";
import bodyParser from "body-parser";
import path from 'path';
import cors from "cors"
import carRouter from "../routes/car.router";

const app: Application = express();

app.use(bodyParser.json())
app.use(cors())
app.use("/", carRouter)
app.use(express.static(path.join(__dirname, '../../public')));

export default app;