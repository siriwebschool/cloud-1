# below is the link to access cloud weekly figjam notes
https://www.figma.com/board/nmmDhPaICJTrYRzcxjZMDE/Cloud-1-SSOW?node-id=0-1&node-type=canvas&t=Z0WzbSCsrTqXEJ18-0

# Docker commands

# Building the images
# Single-stage build
docker build -t express-single-stage # -f Dockerfile .
  - here, express-single-stage - is tagging a build name for your image
  - here # -f Dockerfile is optional, by default docker points to Dockerfile,(if you Dockerfile name is different then this is required)

# Multi-stage build (same as single stage, there is no difference, however i added below)
# ( one way)
docker build -t express-multi-stage # -f Dockerfile . 

# (another way)
docker build --target project -t express-single-stage
--target - this is FROM image name that you defined inside Dockerfile
-t - this is tagging the image name to your image that you are goign to build


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

