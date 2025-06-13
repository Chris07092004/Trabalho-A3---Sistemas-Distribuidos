//var express = require('express');
import express from 'express';

//var path = require('path');
import path from 'path';

//workaround do __dirname
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//fim do workaround



//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';

//var logger = require('morgan');
import logger from 'morgan';

//var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js';

import productRoutes  from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes)
export default app;
