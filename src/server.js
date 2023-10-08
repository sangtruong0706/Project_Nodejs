import express, { Router } from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';
import dotenv from 'dotenv';
import viewEngine from './config/viewEngine';
import initWebRouter from './route/webRoute';
import session from 'express-session';
const path = require('path');
const publicDirectory_ = path.join(__dirname, './public');

// var bodyParser = require('body-parser')
var bcrypt = require('bcryptjs');
dotenv.config();
const app = express();
viewEngine(app);
app.use(express.static(publicDirectory_));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

initWebRouter(app);
connectDB();
const port = process.env.PORT || 4444;

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
});