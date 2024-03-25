// Node modules
import { expect, test } from "vitest";

// Project files
import credentials from "./credentials";
import pool from "./pool";

// Mocks
/**
 * About
 * vi.mock("fs", arrowFunction)
 * - "fs" is the the module name we want to mock.
 * - arrowFunction is an arrow function that returns a method of our module.
 * - readFileSync() is the method that we want to "hijack" to change its value.
 * - return "" is the value we want our "hijacked" method to return.
 *
 * In this case we are saying that fs.readFileSync() always returns {"name": "mocked"}
 */
vi.mock("Pool", () => {
  return {
    connect() {
      return true;
    },
  };
});

test("Displays error message when the PostgressServer is down", async () => {
  // Arrange
  const result = `ENOTFOUND`;

  // Act
  const test = async () => await pool(credentials);

  // Assert
  await expect(test).rejects.toThrow(result);
});
