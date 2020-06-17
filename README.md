## Desafio back-end NodeJS Semana1
# -Repositórios-para-portfólio
Desafio nodejs da semana 1 do bootcamp gostack rocketseat construção de um back-end (CRUD) de repositórios do github.

### Objetivo:

*   criação de CRUD de reposotórios do github com NODE JS

### Rotas Disponíveis:

POST /repositories: A rota receber title, url e techs dentro do corpo da requisição,e sempre inicia os likes como 0.

GET /repositories: Rota que lista todos os repositórios;

PUT /repositories/:id A rota alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

DELETE /repositories/:id A rota deletar o repositório com o id presente nos parâmetros da rota;

POST /repositories/:id/like: A rota aumenta o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;



### Running/Quickstart Application:

*   Clone este repositório
*   Execute no projeto os comandos abaixo:

    $ yarn install

### Version:

1.0.0

### Author:

Elvis Thermo  
