#this script must be launched from the parent directory of 'scripts' directory, where the Dockerfile is located
ng build --prod --optimization
sudo docker rmi -f graphdblp-frontend
sudo docker build -t "graphdblp-frontend" .
sudo docker save -o graphdblp-frontend.tar graphdblp-frontend:latest

