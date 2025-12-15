const { capitalize, reverse } = require("../src/index.js");

describe("capitalize", () => {
  test("should capitalize first letter of a normal string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("javascript")).toBe("Javascript");
  });

  test("should handle already capitalized string", () => {
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("WORLD");
  });

  test("should handle empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("should handle single character", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("A")).toBe("A");
  });

  test("should handle string with spaces", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  test("should throw error for non-string input", () => {
    expect(() => capitalize(123)).toThrow("Input harus string");
    expect(() => capitalize(null)).toThrow("Input harus string");
    expect(() => capitalize(undefined)).toThrow("Input harus string");
    expect(() => capitalize([])).toThrow("Input harus string");
    expect(() => capitalize({})).toThrow("Input harus string");
  });
});

describe("reverse", () => {
  test("should reverse a normal string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("world")).toBe("dlrow");
    expect(reverse("javascript")).toBe("tpircsavaj");
  });

  test("should handle empty string", () => {
    expect(reverse("")).toBe("");
  });

  test("should handle single character", () => {
    expect(reverse("a")).toBe("a");
    expect(reverse("A")).toBe("A");
  });

  test("should handle palindrome", () => {
    expect(reverse("racecar")).toBe("racecar");
    expect(reverse("madam")).toBe("madam");
  });

  test("should handle string with spaces", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });

  test("should handle string with special characters", () => {
    expect(reverse("hello!")).toBe("!olleh");
    expect(reverse("a@b#c")).toBe("c#b@a");
  });

  test("should handle string with numbers", () => {
    expect(reverse("123")).toBe("321");
    expect(reverse("abc123")).toBe("321cba");
  });
});
