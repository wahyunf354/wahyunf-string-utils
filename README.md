# @wahyunf/string-utils

Utility library untuk manipulasi string yang sederhana dan mudah digunakan.

## 📦 Installation

Install package menggunakan npm:

```bash
npm install @wahyunf/string-utils
```

atau menggunakan yarn:

```bash
yarn add @wahyunf/string-utils
```

## 🚀 Usage

Import fungsi yang dibutuhkan:

```javascript
const {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  camelCase,
  snakeCase,
} = require("@wahyunf/string-utils");

// atau menggunakan ES6 modules
import {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  camelCase,
  snakeCase,
} from "@wahyunf/string-utils";
```

## 📚 API Documentation

### `capitalize(text)`

Mengkapitalisasi huruf pertama dari sebuah string.

**Parameters:**

- `text` (string, required): String yang akan dikapitalisasi

**Returns:**

- (string): String dengan huruf pertama yang sudah dikapitalisasi

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { capitalize } = require("@wahyunf/string-utils");

capitalize("hello"); // 'Hello'
capitalize("world"); // 'World'
capitalize("javascript"); // 'Javascript'
capitalize("HELLO"); // 'HELLO'
capitalize(""); // ''
capitalize("a"); // 'A'

// Error handling
capitalize(123); // Error: Input harus string
capitalize(null); // Error: Input harus string
```

### `reverse(text)`

Membalikkan urutan karakter dalam sebuah string.

**Parameters:**

- `text` (string, required): String yang akan dibalik

**Returns:**

- (string): String yang sudah dibalik urutannya

**Examples:**

```javascript
const { reverse } = require("@wahyunf/string-utils");

reverse("hello"); // 'olleh'
reverse("world"); // 'dlrow'
reverse("javascript"); // 'tpircsavaj'
reverse("racecar"); // 'racecar' (palindrome)
reverse("hello world"); // 'dlrow olleh'
reverse("a@b#c"); // 'c#b@a'
reverse("123"); // '321'
reverse(""); // ''
```

### `isPalindrome(text)`

Mengecek apakah sebuah string adalah palindrome (dibaca sama dari depan maupun belakang).

**Parameters:**

- `text` (string, required): String yang akan dicek

**Returns:**

- (boolean): `true` jika palindrome, `false` jika bukan

**Examples:**

```javascript
const { isPalindrome } = require("@wahyunf/string-utils");

isPalindrome("racecar"); // true
isPalindrome("madam"); // true
isPalindrome("hello"); // false
isPalindrome("12321"); // true
```

### `truncate(text, length)`

Memotong string jika melebihi panjang tertentu dan menambahkan "..." di akhir.

**Parameters:**

- `text` (string, required): String yang akan dipotong
- `length` (number, required): Panjang maksimal string

**Returns:**

- (string): String yang sudah dipotong (jika perlu)

**Throws:**

- `Error`: Jika input bukan string, panjang bukan number, atau panjang negatif

**Examples:**

```javascript
const { truncate } = require("@wahyunf/string-utils");

truncate("hello world", 5); // 'hello...'
truncate("hello", 10); // 'hello'
truncate("javascript is awesome", 10); // 'javascript...'
```

### `camelCase(text)`

Mengubah string menjadi format camelCase.

**Parameters:**

- `text` (string, required): String yang akan diubah

**Returns:**

- (string): String dalam format camelCase

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { camelCase } = require("@wahyunf/string-utils");

camelCase("hello world"); // 'helloWorld'
camelCase("Hello World"); // 'helloWorld'
camelCase("JAVA script"); // 'javaScript'
```

### `snakeCase(text)`

Mengubah string menjadi format snake_case.

**Parameters:**

- `text` (string, required): String yang akan diubah

**Returns:**

- (string): String dalam format snake_case

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { snakeCase } = require("@wahyunf/string-utils");

snakeCase("hello world"); // 'hello_world'
snakeCase("Hello World"); // 'hello_world'
snakeCase("JAVA script"); // 'java_script'
```

## 💡 Complete Example

````javascript
const {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  camelCase,
  snakeCase
} = require("@wahyunf/string-utils");

// Capitalize example
const name = "wahyu";
console.log(capitalize(name)); // 'Wahyu'

// Reverse example
const text = "Hello World";
console.log(reverse(text)); // 'dlroW olleH'

// Palindrome check
console.log(isPalindrome("racecar")); // true

// Truncate
console.log(truncate("This is a long sentence", 10)); // 'This is a ...'

// Camel & Snake Case
console.log(camelCase("hello world")); // 'helloWorld'
console.log(snakeCase("hello world")); // 'hello_world'


## 🧪 Testing

Package ini menggunakan Jest untuk testing. Untuk menjalankan test:

```bash
npm test
````

## 📝 License

MIT © Wahyu Nur Fadillah

## 🤝 Contributing

Contributions, issues, dan feature requests dipersilakan! Jangan ragu untuk membuka issue atau pull request.

## 📧 Author

**Wahyu Nur Fadillah**

---

Jika package ini membantu Anda, jangan lupa untuk ⭐ star repository ini!
