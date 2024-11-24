this is second exercise in docker.

Building an application (service - (express js)) with single stage 

in previous sample project you were able to understand what docker image and how you are going to run the image which itself a container.Essentially we wrote a Dockerfile which transformed to image (when its builded) and tranformed to container.

# Steps involved in Single-Stage Application:
this project is to understand what single stage is and asusual we will built and run this container and additionally we are going to observe the image size and the time it takes to build the image.

1. here the index.js contains the service
2. DockerFile contains pulling image node fom dockerhub, creating working directory inside container , copying package.json, running npm install inside contianer and furtherly copying rest of application. 
3. step-2 are the process that involved in building the application
4. furtherly build and run the container. I leave the rest of building and running the container with you as exercise. Similar to sample app do repeat the same and observe the size of image. In my analysis it consumes approx 1 GB.



# More info about single stage:

Single-Stage Docker Build
Definition:
  - All steps required to build and run the application happen in a single stage.
  - The resulting image contains everything, including build tools, dependencies, and runtime.

Use Case:
  - Simpler applications.
  - When image size and security are less critical.

Advantages:
  - Easier to write and understand.
  - No need for complex Dockerfile syntax.
 
Disadvantages:
  - Larger image size due to unnecessary build tools and intermediate files.
  - Less secure since unused components increase the attack surface.
  - Inefficient for production since build artifacts remain in the final image.
