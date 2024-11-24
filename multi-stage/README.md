this is third exercise in docker.

Building a application (service - (express js)) with multi stage

# Steps involved in Multi-Stage Application:
this project is to understand what Multi stage is and here we are going to build to image one is stage 1 image and next is stage 2 (final- so called production ready image), basically we are going to build one image and from hat first image we are going to copy only required things to second image and building the final one, with this we will build optimized image and also we are going to observe the image sizes and the time it takes to build the image.

1. here the index.js contains the service
2. DockerFile contains pulling image node slim fom dockerhub, creating working directory inside container , copying package.json, running npm install inside contianer and furtherly copying rest of application. 
3. once step-2 is done , we are preparing stage-1 build named "multistage1" and from here we are going to create another image where we either can copy image from stage-1 and base node slim image from dockerhub (docker hub info are there in figjam link). furtherly in stage-2 we are copying only code that are necessary (there by we are achieving the optimized build)
4. Final step is to build and run the container. 
 - to build and running the container:

 ##multi-stage:##
docker build --target buildname -t buildname .
eg:
docker build --target multistage1 -t multistage1 .
 - above is for building stage 1 build
docker build --target multistagefinal -t multistagefinal .
- above is for building stage 2 build


docker run:
docker run -p 9000:3000 buildname
- 9000:3000 ports can be any ports
eg:
docker run -p 9000:3000 builder2
for our project, here is the command,
docker run -p 3005:3003 buildname
- once running this try to access localhost with 3005
- 3003 is mapping port inside the container



# More info about Multi stage:

Multi-Stage Docker Build
Definition:
 - The build process is divided into multiple stages.
 - The final image contains only the minimal files required to run the application, while intermediate stages (e.g., for building or compiling) are discarded.

Use Case:
 - Complex applications that require compilation, build tools, or temporary dependencies.
 - Production-grade images where size, performance, and security are critical.

Advantages:
 - Smaller final image size, as only necessary files are copied to the final stage.
 - More secure, as unnecessary tools and libraries are excluded.
 - Cleaner and more efficient production images.

Disadvantages:
 - More complex Dockerfile syntax.
 - Requires understanding of Docker’s build stages.
