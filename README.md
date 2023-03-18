# Running the project

## Server
1. Starting the database
`docker run --name cuppage_db -p 5455:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=cuppage_db -d postgres`

2. Starting Spring Boot
`./mvnw spring-boot:run`