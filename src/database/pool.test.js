// Node modules
import { expect, test } from "vitest";

// Project files
import credentials from "./credentials";
import pool from "./pool";

/**
 * To make this work, the entire scrip inside pool.js must be wrapped in a function called pool()
 */
test("Displays error message when the PostgressServer is down", async () => {
  // Arrange
  const result = `ENOTFOUND`;

  // Act
  const test = async () => await pool(credentials);

  // Assert
  await expect(test).rejects.toThrow(result);
});
