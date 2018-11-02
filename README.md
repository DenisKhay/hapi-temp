tt  https://medium.freecodecamp.org/how-to-setup-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-e251ac189649

More flexibility with db from docker container.  
```bash
docker run -p 27017:27017 -v $(pwd)/dbdata:/data/db --name mongo-eva --restart always -d mongo:latest
```
