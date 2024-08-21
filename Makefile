all : build

build : 
	docker compose build

up: 
	docker compose up --build -d

down: stop
	docker compose down 

stop:
	docker compose stop

purge: down
	docker system prune -af

re: stop down build up

rehard: stop down rmvol up

VOL:=$(shell docker volume ls -q)

IMG:=$(shell docker images)

CONT:=$(shell docker ps -a -q)

rmvol	: 		
	docker volume rm $(VOL)
rmi     :
	docker rmi -f $(IMG)
rmc		:
	docker rm -f $(CONT)
rmall   : rmc rmvol rmi

.PHONY: all build up down stop purge re rehard rmvol rmi rmc rmall