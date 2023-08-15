# Final Project (Front End)

This repository contains the frontend of the Tokopedia Play Clone App for Final Project from the Generasi Gigih 3.0 program.

## Wireframe

Video List
![alt text](https://github.com/ddiox/gigih-final-project-fe/blob/master/docs/videolist.png?raw=true)

Video Detail
![alt text](https://github.com/ddiox/gigih-final-project-fe/blob/master/docs/videodetail1.png?raw=true)
![alt text](https://github.com/ddiox/gigih-final-project-fe/blob/master/docs/videodetail2.png?raw=true)
![alt text](https://github.com/ddiox/gigih-final-project-fe/blob/master/docs/videodetail3.png?raw=true)

## Project Structure

we can see in src folder there are hooks, components, and pages folders.

- hooks contains: useFetch
- components contains: Header, Loading, ProductCard, and VideoCard
- pages contains: HomePage, DetailPage, and ErrorPage

## How to run in local

before run the frontend application, run the backend application first, follow the instructions here:
https://github.com/ddiox/gigih-final-projct-be

1. Clone this repository

```
git clone https://github.com/ddiox/gigih-final-project-fe.git
```

2. Install dependencies

```
npm install
```

3. Run the application (http://localhost:3000)

```
npm start
```

## How to run in Docker

before run the frontend application, run the backend application first, follow the instructions here:
https://github.com/ddiox/gigih-final-projct-be

1. Pull Docker Image from DockerHub

```
docker pull glenn24/ui:latest
```

2. Run the container

```
docker run -p 3000:3000 -d glenn24/ui:latest
```

https://hub.docker.com/repository/docker/glenn24/ui/general

## Tools

- React.js
- Chakra UI
- React Router
