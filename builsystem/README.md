# Buildsystem enviroment

###We want to use a complete applicationstack for a buildsystem enviroments.

- Feel free to secure, configure, link or mod these base app installations.
- In upcomming tasks we will setup a sample php project including code coverage, dry check, codesniff , phpunit, packaging, releasing and autodeploing.

##Following components are used for the different approaches:


## Versioncontrol
- GitLab Community Edition 8.11.4 b871b76
  - http://localhost:10080
  - you have to set a passowrd for user : root

## Buildsystem
- Jenkins 2.0
  - http://localhost:8081
  - username: admin / admin
  - Build your projects, run tests , package them and deploy your application

## Artifactmanager
- Sonar Nexus Repository Manager OSS 2.13.0-0: 
  - http://localhost:8082
  - username: admin / admin
  - Its the artifactmanager to store releases and 3rdparty libs


# Prerequesits
- Docker running (Linux or Mac or Windows)
- docker compose running


# Installation

Just clone the project and run the startup.sh
The links to the application are displayed on the console after successfull installation

