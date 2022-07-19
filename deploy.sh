docker stop enrollment_fe
docker rm enrollment_fe
docker rmi ir_enrollment_fe

docker build -t ir_enrollment_fe . 
docker run -d -p 7999:7999 --name enrollment_fe ir_enrollment_fe
docker image prune -f