# Dockerize Python Flask-React Web Application

## Table of Contents
- [Description](#Description)
- [Getting started](#Getting-started)
- [Docker Files](#Docker-Files)
- [Maintaining the Containers](#Maintaining-the-Containers)
- [Useful commands](#Useful-commands)

## Description
> **Note:** This project requires Docker and Docker Compose to be installed on your system. (For installation refer to https://docs.docker.com/compose/install/)

In this repository, we will create a docker image that includes a simple python flask web application that has the following apis/endpoints:

1. **`/creation`** - provides the time the image was built.
2. **`/dynamic`** - a dynamic parameters / value provided when the image is built.
3. **`/dockerfile`** - provides the dockerfile the image was created with (in the image).
4. **`/`** - returns an index.html.
5. **`/put`** - gets a file and stores it on the image runtime. 
6. **`/get?filename`** - returns a file from the local store (that was uploaded previously). 
7. **`/list`** - list all files that were uploaded previously.
##

# Getting Started

### Step 1:
> Update the dynamic paramater value that is in the .env file (if necessary)


### Step 2: Building the images

> Run the following command to build the docker images from the docker-compose.yml file

> **Note:** Changing the container port or name will require you to make the changes in the docker-compose.yml file

```
docker-compose build
```

### Step 3: Running the containers
> Run the following command to start the containers

```
docker-compose up
```

### Step 4: Accessing the application
#### Using a browser (Viewing the application):
> In your web browser navigate to http://localhost:3000/ to view the application.

#### Using curl (Accessing the flask endpoints):
> you can access the flask app endpoints by using curl command on http://localhost:5000 for example:

```
curl -X GET "http://localhost:5000/creation"
```

# Docker Files
> **Note:** Each app folder has its own docker and README files with instructions to run each image separately

### Flask App:
> To view the Flask app navigate to folder flask-backend 

### React App:
> To view the React app navigate to folder react-frontend


# Maintaining the Containers
## viewing the logs
### Using docker-compose command:
> you can view the logs for a container (service) use:
``` 
docker-compose logs service-name
```

in our case use:
```
docker-compose logs backend
```

### Using docker command:
> First we need to find out the name or ID of the container using :
```
docker ps

CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS                    NAMES
8d4f4c89aaff   react-frontend           "docker-entrypoint.s…"   5 minutes ago    Up 5 minutes    0.0.0.0:3000->3000/tcp   react-frontend-container
5e1b77a0ff6b   flask-backend            "python app.py"          5 minutes ago    Up 5 minutes    0.0.0.0:5000->5000/tcp   flask-backend-container
```

> Then run the following:

```
docker logs flask-backend-container
```

> **NOTE :** you can use the **-f** flag to both docker and docker-compose logs to view the logs in real time ( **```docker logs -f flask-backend ```**)

## Stopping the containers
> To stop the containers (services) that were started using docker-compose use:

```
docker-compose stop
```
> To stop a specific service using docker-compose use:

```
docker-compuse stop service-name
```

# Useful commands
### To stop and remove all services:
``` 
docker-compose down
```

### Removing a container of a specific service
```
docker-compose stop <service-name>
docker-compose rm <service-name>
```

