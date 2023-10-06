import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from '@sequelize/core';
import dotenv from 'dotenv';
import viewEngine from './config/viewEngine';
import initWebRouter from './route/webRoute';
import session from 'express-session';
// var bodyParser = require('body-parser')
var bcrypt = require('bcryptjs');
dotenv.config();
const app = express();
viewEngine(app);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

initWebRouter(app);
const port = process.env.PORT || 4444;

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
});