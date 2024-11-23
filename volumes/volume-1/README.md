# Volume Concepts


STEPS - docker volume:
docker build -t express-app-volume-demo .


docker run -p 3001:3000 --name no-volume-container express-app-volume-demo


http://localhost:3001/


docker exec -it container-name bash
docker exec -it no-volume-container bash


ls /usr/src/app/temp


cat /usr/src/app/temp/generated-file.txt - file name

-- not using right-now -  next two lines
during running container if we want to observer we can copy through below commands:
docker cp container-name:/usr/src/app/temp C:\docker-temp
--

with bind mount:
docker run -d -p 3001:3000 -v C:\Users\LENOVO\host-temp:/usr/src/app/temp --name bindmount express-app-volume-demo


with volume:

docker volume create express-temp-data
-- my volume name express-temp-data

docker run -d -p 3001:3000 -v express-temp-data:/usr/src/app/temp --name container-with-volume express-app-volume-demo
-- name a container container-name


(optional)
docker run -it --rm -v express-temp-data:/data alpine sh
ls /data
cat /data/<filename>

docker run --rm -v express-temp-data:/data -v C:\Users\LENOVO\volume-backup:/backup alpine sh -c "cp -r /data/* /backup"

docker run -d -p 3001:3000 -v express-temp-data:/usr/src/app/temp --name container-with-volume express-app-volume-demo