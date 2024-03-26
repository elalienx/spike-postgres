// Node modules
import { expect, test } from "vitest";

// Project files
import credentials from "./credentials";
import postgressPool from "./postgressPool";

test("Displays error message when the Postgress server is down", async () => {
  // Arrange
  const result = `ENOTFOUND`;

  // Act
  const test = async () => await postgressPool(credentials);

  // Assert
  await expect(test).rejects.toThrow(result);
});
