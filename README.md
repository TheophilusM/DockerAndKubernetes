# **Docker**

* For software deployment
* App runs in the same environment with a docker runtime engine installed
* Container
    - an abstration at the app layer,
    - it packages code and dependencies together,
    - more than one container can run on same machine, and share the same OS kernel with each other
    - each running as isolated processes in user space
    - fast boot
    - uses less memory
    - don't need full OS
    - deployment
    - testing
* Virtual Machines
    - an abstration of the physical hardware turning server into many servers
    - hypervisor allows multiple VMs to run on single machine
    - each VM has a full copy of an OS, the application, required vinaries and libraries which take up more space
    - slow to boot

### **Images & Containers**
* Image
    - a template for creating an environment of your choice
    - a snapshot
    - contains everything required for an app to run
        - OS, software and app code
    - can be downloaded on a registery such as **Docker Hub**
    - image examples
        - _nginx_
        - _mongoDB_
        - _node_
        - _redis_
        - _ubuntu_
        - _mysql_
    - docker utilize caching when building an image
    - image size
        - using **alpine** - small, simple and secure
* Container
    - a running instance of an image
    - using a container running
        - it expose a tcp (80) port
        - to access on localhost 0.0.0.0:8080 port
        - `-p 8080:80`
        - can map more than 1 port
        - `-p 8080:80 -p 3000:80`

### **Volumes**
* Allow sharing of data (file or folders) between:
    - host & containers
        - bind mount volumn
    - containers

### **Dockerfile**
* Contain information on how to create an image
* **dockerignore** file

### **Tags and Versiom**
* Allow controlling of the image version
* Creating an image using same image name and version that already exist, will override existing images leaving them without a repository and tag

### **Docker Registeries**
* A computer server
* Types based on access
    - Public
    - Private
* Examples
    - Docker Hub
    - quay.ios
    - Amazon ECR
* Highly scalable server side application that stores and allows distribution of Docker images.
* Used in CD/CI pipeline
    - Continuous Delivery
    - Continuous Intergration
* To run an application
* Pushing to Docker Hub repo
    - Create public or private repo
    - Create an image with relative docker repo name and tag
        - `docker tag <my-local-image-name>:<my-local-image-tag> <docker-account-username>/<repository-name>:<tag-name>`
        - can have more that one repositories to be pushed
    - Push the repos to docker hub
        - log into docker with username and password
        - push the intended images
        - `docker push <docker-account-username>/<repository-name>:<tag-name>`
* Pulling from Docker Hub a repo
    - `docker pull <docker-account-username>/<repository-name>:<tag-name>`
        - omitting tag name will return the latest version

### **Commands**
* `docker` 
    - help
* `docker --version`
* `docker-compose up -d`
* `docker ps` 
    - list all running containers
* `docker ps -a`
    - list all containers
* `docker ps -aq`
    - list all containers' numeric IDs
* `docker pull <image-name>` 
    - download an image from Docker Hub
* `docker pull <image-name>:<alpine>`
    - to pull docker image with alpine
* `docker image` 
    - list all installed images
* `docker build --tag <image-namoe>:<image-tag> <dockerfile-path>`
    - to run dockerfile to create an image
* `docker run -d -p <host-port>:<container-port> <image-name>:<image-tag>`
    - to run a container from an image
    - creates container with a random name
    - -d -> to run in detarched mode
    - -p -> to map ports
* `docker container ls` 
    - show all running containers
* `docker stop <container-id _or_ container-name>` 
    - to stop a running container
    - does not delete the container
* `docker start <container-id _or_ container-name>` 
    - to start a container
* `docker rm <container-id _or_ container-name>` 
    - to delete container
* `docker rm $(docker ps -aq)`
    - to delete all containers
    - won't work if there is a running container 
* `docker rm -f $(docker ps -aq)`
    - to force delete all containers even if some are running
* `docker run --name <container-name> -d -p <host-port>:<container-port> <image-name>:<image-tag>`
    - --name -> specify container name
* `docker ps --format=<"format-result">`
* `docker run --name <container-name> -v $(pwd):<container-folder-path>:<type> -d`
    - mapping/mounting a volume to container
    - ${pwd} - poweshell or $(pwd) - mac/linux or %cd% -windows
    - type for container example:
        - read and write is default
        - ro -> read only
* `docker exec -it <container-id _or_ container-name> <cmd>`
    - enter container terminal
    - -i -> interactive
    - -t -> allocates a pseudo-TTY
    - cmd -> can find the path using `docker inspect` or use `bash`
* `docker run --name <container-name> --volumes-from <container-name> -d`
    - mapping/mounting a container to a container
* `docker tag <existing-image-name>:<existing-tag-version> <new-image-name>:<new-tag-version>`
    - image tag version from an existing image
* `docker inspect <container-id _or_ container-name>`
    - to show full details of a running container
* `docker logs -f <container-id _or_ container-name>`
    - displays all logs for a container running
    - -f -> to show logs in realtime
* ``
* ``
* ``
* ``
* ``


# **Kubernetes**