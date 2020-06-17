## Desafio back-end NodeJS Semana1
# -Repositórios-para-portfólio
Desafio nodejs da semana 1 do bootcamp gostack rocketseat construção de um back-end (CRUD) de repositórios do github.

### Objetivo:

*   criação de CRUD de reposotórios do github com NODE JS

### Rotas Disponíveis:


POST /repositories: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

GET /repositories: Rota que lista todos os repositórios;

PUT /repositories/:id A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

DELETE /repositories/:id A rota deve deletar o repositório com o id presente nos parâmetros da rota;

POST /repositories/:id/like: A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;



### Running/Quickstart Application:

*   Clone este repositório
*   Execute no projeto os comandos abaixo:

    $ yarn install

### Version:

1.0.0

### Author:

Elvis Thermo  
