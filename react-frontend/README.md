# React App
> **NOTE :** Running this application without the flask application will only result in errors when clicking the buttons

In this repository, we will create a docker image that includes a simple react application that each button within runs one of the following endpints from the flask app.

1. **`/creation`** - provides the time the image was built.
2. **`/dynamic`** - a dynamic parameters / value provided when the image is built.
3. **`/dockerfile`** - provides the dockerfile the image was created with (in the image).
4. **`/`** - returns an index.html.
5. **`/put`** - gets a file and stores it on the image runtime. 
6. **`/get?filename`** - returns a file from the local store (that was uploaded previously). 
7. **`/list`** - list all files that were uploaded previously

### Building the image
> To build the image run the following command the directory that contains the Dockerfile

```
docker build -t react-frontend .
```

### Running the container
> To run the container use the following command

```
docker run -p 3000:3000 react-frontend
```
