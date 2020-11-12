/*requisição dps de instalar o express*/
import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
//rota = conjunto
//recurso = usuário
//métodos http = GET, POST, PUT, DELETE
//parametros

//GET = busacar uma informçao (lista, item)
//POST = cria uma infromação
//PUT = editando uma informação
//DELETE = deletar uma informação

//Query params: http://localhost:3333/users?search=marlon
//Route params: http://localhost:3333/users?search=marlon/1 (Identificar um recurso)
//Body: http://localhost:3333/users (Identificar um recurso)



app.listen(3333);