// Project files
import credentials from "./credentials";
import pool from "./pool";

test("It susscesfully connect to the Postgres server using the correct credentials", async () => {
  // Arrange
  const result = 200;

  // Act
  const test = await pool(credentials);

  // Assert
  expect(test).toBe({ satus: result });
});

test("If shows the host error message if the host is incorrect", async () => {
  // Arrange
  const credentials = credentials;
  const result = `Error: Ensure your environment has a Postgres server. If using Docker, verify that the host called ${credentials.host} matches the Docker container name of the database`;

  credentials.host = 666; // break the host por number on purpose

  // Act
  const test = await pool(credentials);

  // Assert
  expect(test).toThrowError(result);
});
