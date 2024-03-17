# spike_node_postgresql

A learning environment to test node with a database

## Tutorial

[Build a CRUD API with Docker Node.JS Express.JS & PostgreSQL](https://www.youtube.com/watch?v=sDPw2Yp4JwE)

## Rare bug 🐞

The `host: "db",` (db) inside `database.js` _must_ match the service name `services: db:` (db) on `docker-compose.yaml`
