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

import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  const users = [{ name: "bruno" }, { name: "not jhonny" }];

  response.json(users);
});

app.delete("/users", (request, response) => {
  console.log(request.query);

  const users = [{ name: "ops" }, { name: "not jhonny" }];

  response.json(users);
});

app.listen(3333);
