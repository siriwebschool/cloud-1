with this application we are dockerizing hello world service
   technology used express js framework

steps:
  1. though we dont need node js as we running this application in docker. npm & node can be installed on your machine, however its good that you have env setup in such way.
  2. download docker desktop from following site:
  https://docs.docker.com/desktop/setup/install/windows-install/
  3. app structure
      sample
       |_app.js
       |_package.json
       |_package-lock.json
       |_README.md
  4. in app js we written a service where it display hello world
  5. in Dockerfile, with this file command we are creating a image.
  6. understand some basic commands which you can find in figjam link of session 11/02/2024
  7. now once these things are ready, we can build the image first and run the container.
  8. to build the image:
     - docker build -t express-hello .
      - here name of the image is - express-hello
  9. once you see image built is successful, run the container with following command.
     - docker run -p 3000:3000 --name express-hello-container express-hello
       - here, name of the container is - express-hello-container





Docker Compose:
docker compose up --build


container to stop:
docker stop <container_id_or_name>
docker ps


image to stop:
docker rmi <image_name_or_id>

docker rmi -f hello-world

docker remove container:
docker rm (container name or id) eg:af344a0ed417

-remove all images: (force)
docker rmi -f $(docker images -q)


-- remove all container:
docker rm $(docker ps -a -q)


- remove volume:
docker volume rm $(docker volume ls -q)




