import { ListPhoneBook } from './src/entity/ListPhoneBook';
import { PhoneBook } from './src/entity/PhoneBook';
import express from "express";
import 'reflect-metadata';
import { Staff } from "./src/entity/Staff";
import multer from 'multer';
import axios from 'axios';
import * as path from 'path';
import bodyParser from "body-parser";
import { Products } from './src/entity/Products';
import apiRouter from './src/router/api.router'
import morgan from 'morgan'
import helmet from 'helmet';
import fs from 'fs';
const upload = multer();
const port = 3000;
import mongoose from "mongoose";
import staffRouter from './src/router/staff.router';
mongoose.connect('mongodb://localhost:27017/admin')
    .then(() => console.log('connect success'))
    .catch(e => console.log(e.message))
// typeorm khởi tạo kết nối với database
const app = express()
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', apiRouter)
app.use(morgan('common'))
// app.use(helmet())
app.use(staffRouter)
app.listen(port, () => {
    console.log('Server listening ' + port);
})