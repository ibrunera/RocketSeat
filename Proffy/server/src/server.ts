/**
 * GET - buscar
 * POST - criar
 * PUT - atualizar
 * DELETE
 *
 * route params (.params) identificar recurso p atualizar ou deletar
 * query params (.query) paginacao, filtro, ordenacao
 *
 * SELECT * FROM USERS
 * knex('users').select('*')
 */

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
