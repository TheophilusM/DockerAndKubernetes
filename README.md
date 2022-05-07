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
    - docker utilize catching when building an image
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
    - containers

### **Dockerfile**
* Contain information on how to create an image

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
* `docker run --name <container-name> -v $(pwd):<container-path>:<type> -d`
    - mapping/mounting a volume to container
    - pwd or dir
    - type for container example:
        - read and write is default
        - ro -> read only
* `docker exec -it <container-name> bash`
    - enter container terminal
* `docker run --name <container-name> --volumes-from <container-name> -d`
    - mapping/mounting a container to a container
* ``
* ``

# **Kubernetes**