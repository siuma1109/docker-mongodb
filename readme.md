# MongoDB Service

## Description

This is a Docker Compose setup for running a MongoDB service. It includes a Dockerfile and a docker-compose.yml file, and uses the official MongoDB Docker image.

## Usage

To start the MongoDB service, follow these steps:

### 1. Create the necessary directories for MongoDB data and logs:

```
mkdir data logs
```

### 2. Start the service with Docker Compose:

```
docker-compose up -d
```

This command will start the MongoDB service in the background and leave it running. You can use the following command to check the status of the containers:

```
docker-compose ps
```

### 3. To stop the MongoDB service, run the following command:

```
docker-compose down
```

## Note

Make sure that you have Docker and Docker Compose installed on your machine before running these commands.