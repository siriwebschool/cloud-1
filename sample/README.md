1. Prerequisite: Node.js (Optional)
Although this application runs in Docker, you can install Node.js and npm on your machine for a better understanding of the environment setup.

2. Install Docker Desktop
Download and install Docker Desktop from the official Docker documentation.

3. Application Structure
The project directory structure is as follows:

sample/
├── app.js
├── package.json
├── package-lock.json
├── README.md

4. The Hello World Service
In app.js, we have created a simple Express.js service that responds with "Hello World" when accessed.

5. Dockerfile
The Dockerfile contains instructions to build a Docker image for the application.

6. Docker Commands Basics
Refer to FigJam session notes from 11/02/2024 for understanding Docker basics.

### COMMANDS SETION ###

# Building and Running the Application

# Build the Docker Image

Run the following command in the project directory to build the image:

- docker build -t express-hello .
info:
  express-hello is the name of the Docker image.

# Run the Docker Container

Run the container using the built image:

- docker run -p 3000:3000 --name express-hello-container express-hello
info:
 express-hello-container is the name of the Docker container.

The application will now be accessible at http://localhost:3000.

# Check Image
docker images # will list all images build -from this you can take the image names or ids

# Stop a Running Container
docker stop <container_id_or_name>
docker ps  # List running containers

# Remove an Image
docker rmi <image_name_or_id>
docker rmi -f hello-world  # Force removal

# Remove a Container
docker rm <container_id_or_name>
docker rm af344a0ed417  # Example

# Remove All Images (Force)
docker rmi -f $(docker images -q)

# Remove All Containers
docker rm $(docker ps -a -q)

# Remove Volumes
docker volume rm $(docker volume ls -q)






