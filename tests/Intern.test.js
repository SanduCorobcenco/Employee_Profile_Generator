const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UW";
  const e = new Intern("Fake", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Fake", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UW";
  const e = new Intern("Fake", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});