# Docker Compose talk

## Building large enterprise applications with microservices

#### The client is using microservices
Every team has responsibility for their own services
The number of services increases rapidly

#### Integration test hell
- Large number of services increases the need for doing integration testing.
- Its hard to keep track of all the services.
- Much time is spent just starting the services.
- Hard to keep track of all the versions.
- You should mock, but that mocking takes a lot of time.

## Run every service in a container
- Docker comes to the rescue
- Create docker images from each service
- Upload the image to a central repository: Google Cloud, DockerHub etc...

## Can we do everything in 1 command?
- docker-compose
- Start all your services in one command: `docker-compose up -d`

## Docker Compose comes to the rescue
- docker-compose.yml
```
version: '2'
  services:
    api1: 
      image: <name>/<appname>:<version>
      ...
    api2: 
      image: <name>/<appname>:<version> 
      ...
    db1: 
      image: <name>/<appname>:<version>
      ...
    db2: 
      image: <name>/<appname>:<version>
      ...
```
`docker-compose up -d`
`docker-compose ps`
`docker-compose down`

## Demo-time!