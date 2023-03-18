# Running the project

## Starting the database
```
docker run --name cuppage_db -p 5455:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=cuppage_db -d postgres
```