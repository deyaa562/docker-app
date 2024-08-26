# Flask App

In this repository, we will create a docker image that includes a simple python flask web application that has the following apis/endpoints:

1. **`/creation`** - provides the time the image was built.
2. **`/dynamic`** - a dynamic parameters / value provided when the image is built.
3. **`/dockerfile`** - provides the dockerfile the image was created with (in the image).
4. **`/`** - returns an index.html.
5. **`/put`** - gets a file and stores it on the image runtime. 
6. **`/get?filename`** - returns a file from the local store (that was uploaded previously). 

### Building the image
> To build the image run the following command the directory that contains the Dockerfile

```
docker build --build-arg BUILD_TIME="$(date +%Y-%m-%d-T%H:%M:%SZ)" --build-arg DYNAMIC_PARAM=your_dynamic_value -t flask-backend .
```

### Running the container
> To run the container use the following command

```
docker run -p 5000:5000 flask-backend
```
