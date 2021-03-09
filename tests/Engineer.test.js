const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Fake", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Fake", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("getGithub() returns GitHub username", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Fake", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});