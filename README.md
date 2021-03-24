# RESTful Web Service

### Description
This repo contains a RESTful web service that runs from a docker container and pulls information from the json database.

### Team
- Sarah Lin
- Jack Brody

### Source code
All source code are in the folder "src".

### Data Model
- Based off of heroes and villains from comics or movies. It includes:
  - Super name
  - Real name
  - Allegiance
  - Comic company
  - Identification number for reference of retrieval

### How to Run
- Use `docker build` to build a docker image
- Use `docker run -p 6038:8000 imagename` to run the image within the container
- Check `localhost:6038` for result
