# spike_node_postgresql

A learning environment to test node with a database

## Tutorial

[Build a CRUD API with Docker Node.JS Express.JS & PostgreSQL](https://www.youtube.com/watch?v=sDPw2Yp4JwE)

## Todo

- Add validation if table assigment already exist
- Refactor `index.js` endpoints
- Do queries on `test.rest` to get _canddiates_ by _assigment_id_

## Rare bug 🐞

The `host: "myName",` inside `database.js` **must** match the service name `services: myName:` on `docker-compose.yaml`

## Glitch

Make sure to destroy the images before making a new one, otherwise the databases will glitch like crazy!

## Express sentStatus() vs status()

- `sentStatus(status_code)` sends the `status_code` to the client inmediatelly.
- `status(status_code)` allows you to send extra information to the client using `status(status_code).send({ message: message })`.

## Postgres Client vs Pool

### Client:

- Represents a single connection to the PostgreSQL database.
- Connection management is manual; you need to explicitly open and close connections.
- Suitable for applications requiring sequential database operations or when you need explicit control over the connection lifecycle.
- Ideal for scenarios where you have a single client interacting with the database at a time.
- Provides fine-grained control over the connection, but requires more attention to manage the connection properly.

### Pool:

- Represents a pool of multiple connections to the PostgreSQL database.
- Connection management is automatic; connections are created when needed and released back to the pool after query execution.
- Suitable for applications with high concurrency where multiple clients may need to interact with the database simultaneously.
- Efficiently handles multiple concurrent requests by reusing connections from the pool.
- Simplifies connection management, but may have slightly higher overhead compared to managing a single connection with Client.
