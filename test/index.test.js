const {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  camelCase,
  snakeCase,
  kebabCase,
} = require("../src/index.js");

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

describe("isPalindrome", () => {
  test("should return true for palindrome strings", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("aa")).toBe(true);
  });

  test("should return false for non-palindrome strings", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("javascript")).toBe(false);
    expect(isPalindrome("abc")).toBe(false);
  });

  test("should handle empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("should be case-sensitive", () => {
    expect(isPalindrome("Racecar")).toBe(false);
    expect(isPalindrome("Madam")).toBe(false);
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should handle strings with spaces", () => {
    expect(isPalindrome("hello world")).toBe(false);
    expect(isPalindrome("a b a")).toBe(true);
    expect(isPalindrome("a b c")).toBe(false);
  });

  test("should handle strings with special characters", () => {
    expect(isPalindrome("a!a")).toBe(true);
    expect(isPalindrome("a@b@a")).toBe(true);
    expect(isPalindrome("hello!")).toBe(false);
  });

  test("should handle strings with numbers", () => {
    expect(isPalindrome("121")).toBe(true);
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("123")).toBe(false);
  });
});

describe("truncate", () => {
  test("should truncate string if longer than length", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
  });

  test("should not truncate string if shorter than length", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  test("should not truncate string if equal to length", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });

  test("should throw error if input is not string", () => {
    expect(() => truncate(123, 5)).toThrow("Input harus string");
  });

  test("should throw error if length is not number", () => {
    expect(() => truncate("hello", "5")).toThrow("Panjang harus number");
  });

  test("should throw error if length is negative", () => {
    expect(() => truncate("hello", -1)).toThrow("Panjang tidak boleh negatif");
  });
});

describe("camelCase", () => {
  test("should convert string to camelCase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
    expect(camelCase("Hello World")).toBe("helloWorld");
    expect(camelCase("JAVA script")).toBe("javaScript");
  });

  test("should handle string with multiple spaces", () => {
    expect(camelCase("hello   world")).toBe("helloWorld");
  });

  test("should handle string with special characters", () => {
    expect(camelCase("foo bar baz")).toBe("fooBarBaz");
  });

  test("should throw error if input is not string", () => {
    expect(() => camelCase(123)).toThrow("Input harus string");
  });
});

describe("snakeCase", () => {
  test("should convert string to snake_case", () => {
    expect(snakeCase("hello world")).toBe("hello_world");
    expect(snakeCase("Hello World")).toBe("hello_world");
    expect(snakeCase("JAVA script")).toBe("java_script");
  });

  test("should handle string with multiple spaces", () => {
    expect(snakeCase("hello   world")).toBe("hello_world");
  });

  test("should handle string with special characters", () => {
    expect(snakeCase("foo bar baz")).toBe("foo_bar_baz");
  });

  test("should throw error if input is not string", () => {
    expect(() => snakeCase(123)).toThrow("Input harus string");
  });
});

describe("kebabCase", () => {
  test("should convert string to kebab-case", () => {
    expect(kebabCase("hello world")).toBe("hello-world");
    expect(kebabCase("Hello World")).toBe("hello-world");
    expect(kebabCase("JAVA script")).toBe("java-script");
    expect(kebabCase("FOO BAR")).toBe("foo-bar");
  });

  test("should handle string with multiple spaces", () => {
    expect(kebabCase("hello   world")).toBe("hello-world");
    expect(kebabCase("foo    bar    baz")).toBe("foo-bar-baz");
    expect(kebabCase("a  b  c")).toBe("a-b-c");
  });

  test("should handle string with single space", () => {
    expect(kebabCase("hello world")).toBe("hello-world");
    expect(kebabCase("a b")).toBe("a-b");
  });

  test("should handle string with tabs and newlines", () => {
    expect(kebabCase("hello\tworld")).toBe("hello-world");
    expect(kebabCase("hello\nworld")).toBe("hello-world");
    expect(kebabCase("hello\r\nworld")).toBe("hello-world");
  });

  test("should handle empty string", () => {
    expect(kebabCase("")).toBe("");
  });

  test("should handle single character", () => {
    expect(kebabCase("a")).toBe("a");
    expect(kebabCase("A")).toBe("a");
  });

  test("should handle string without spaces", () => {
    expect(kebabCase("hello")).toBe("hello");
    expect(kebabCase("HELLO")).toBe("hello");
    expect(kebabCase("HelloWorld")).toBe("helloworld");
  });

  test("should handle string with leading and trailing spaces", () => {
    expect(kebabCase("  hello world  ")).toBe("-hello-world-");
    expect(kebabCase(" hello world ")).toBe("-hello-world-");
  });

  test("should handle string with special characters", () => {
    expect(kebabCase("foo bar baz")).toBe("foo-bar-baz");
    expect(kebabCase("hello-world")).toBe("hello-world");
    expect(kebabCase("hello_world")).toBe("hello_world");
  });

  test("should handle string with numbers", () => {
    expect(kebabCase("hello 123 world")).toBe("hello-123-world");
    expect(kebabCase("test 1 2 3")).toBe("test-1-2-3");
  });

  test("should handle string with mixed case", () => {
    expect(kebabCase("Hello World Test")).toBe("hello-world-test");
    expect(kebabCase("JavaScript React Vue")).toBe("javascript-react-vue");
  });

  test("should throw error for non-string input", () => {
    expect(() => kebabCase(123)).toThrow("Input harus string");
    expect(() => kebabCase(null)).toThrow("Input harus string");
    expect(() => kebabCase(undefined)).toThrow("Input harus string");
    expect(() => kebabCase([])).toThrow("Input harus string");
    expect(() => kebabCase({})).toThrow("Input harus string");
    expect(() => kebabCase(true)).toThrow("Input harus string");
    expect(() => kebabCase(false)).toThrow("Input harus string");
  });
});
