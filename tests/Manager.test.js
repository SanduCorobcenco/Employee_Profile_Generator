const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Fake", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() returns "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Fake", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("getOffice() returns the office number", () => {
  const testValue = 100;
  const e = new Manager("Fake", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});