const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

//get all respositoris
app.get("/repositories", (request, response) => {
  
  return response.json(repositories);
});

//post repositores and like defaul 0
app.post("/repositories", (request, response) => {

  const {title, url, techs, likes=0} = request.body;

  const repository = {"id":uuid(),title, url, techs, likes};

  repositories.push(repository);
  return response.json(repository);

});

//update title, url, and techs
app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;

  const indexRepository = repositories.findIndex(repository =>repository.id === id);

  
  if(indexRepository<0){
    return response.status(400).json({error:"Repository not found"})
  }

  //save likes
  const likes = repositories[indexRepository].likes;

  const repository = {id,title, url, techs,likes};
  
  repositories[indexRepository] = repository;

  return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const indexRepository = repositories.findIndex(repository =>repository.id === id);
  
  if(indexRepository<0){
    return response.status(400).json({error:"Repository not found"})
  }

  repositories.splice(indexRepository,1);

  return response.status(204).send();

});

//add likes by id
app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;

  const indexRepository = repositories.findIndex(repository=>repository.id ===id);

  if(indexRepository<0){
    return response.status(400).json({error:"Repository not found"})
  }

  let likes = repositories[indexRepository].likes;

  const repository = repositories[indexRepository]
  
  repository.likes = likes+=1;

  return response.json(repository);
});

module.exports = app;
