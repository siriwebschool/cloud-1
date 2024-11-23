# below is the link to access cloud weekly figjam notes
https://www.figma.com/board/nmmDhPaICJTrYRzcxjZMDE/Cloud-1-SSOW?node-id=0-1&node-type=canvas&t=Z0WzbSCsrTqXEJ18-0

# steps:
 1. Read the PPT - understand the basics
 2. download docker desktop and install it
 3. clone this repos in git and navigate to sample app folder
 

# Additional Commands:


# Running The Container #
# (3001 - your host port , 3000 is container port)
docker run -p 3001:3000 express-single-stage
  - express-single-stage this is the image name that you build

docker run -p 3003:3000 express-multi-stage



# Docker common commands

- listing docker images
docker images

- listing running container
docker ps

- listing stopped containers but not removed
docker ps -a

- removing image
docker rmi imageid

- stopping the particular container
docker stop containerid

- removing the container
docker rm containerid

