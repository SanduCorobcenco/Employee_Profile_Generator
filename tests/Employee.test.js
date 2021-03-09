const Employee = require("../lib/Employee");

test("Can find Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Code can set name via constructor arguments", () => {
  const name = "Robert";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can create employee ids via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can add emails via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("getName() gets a name", () => {
  const testValue = "Cinthia";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("getId() gets an ID", () => {
  const testValue = 100;
  const e = new Employee("Fake", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getEmail() gets an email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Fake", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Cinthia", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
