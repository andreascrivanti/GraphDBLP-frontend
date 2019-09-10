# What is GraphDBLP-frontend?

**GraphDBLP-frontend** is a front-end GUI for [GraphDBLP](https://github.com/fabiomercorio/GraphDBLP) project, that wraps the python queries.

Before running, follow the [GraphDBLP Quickstart](https://github.com/fabiomercorio/GraphDBLP#quick-start) to have Neo4j running.

## Run the container

You must have Neo4j running and accepting HTTP connections on port 7474, and the [GraphDBLP-backend](https://github.com/andreascrivanti/GraphDBLP-backend) project running on port 8081.
To run the GraphDBLP-frontend just type:

docker run -p 80:80 -it -d andreascrivanti/graphDBLP-frontend

## Customizing code and technicalities

This is an Angular 7 project created with Angular-CLI and edited using Visual Studio Code.
In _dist_ folder there is the compiled code, that will be included into the docker container.

You can use the configuration service (src/app/config.service.ts) to specify the backend and neo4j addresses; after those changes, you must build the application to update _dist_ folder.