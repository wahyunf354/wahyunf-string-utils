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
const { capitalize, reverse } = require("@wahyunf/string-utils");

// atau menggunakan ES6 modules
import { capitalize, reverse } from "@wahyunf/string-utils";
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

## 💡 Complete Example

```javascript
const { capitalize, reverse } = require("@wahyunf/string-utils");

// Capitalize example
const name = "wahyu";
const capitalizedName = capitalize(name);
console.log(capitalizedName); // 'Wahyu'

// Reverse example
const text = "Hello World";
const reversedText = reverse(text);
console.log(reversedText); // 'dlroW olleH'

// Combine functions
const input = "javascript";
const result = capitalize(reverse(input));
console.log(result); // 'Tpircsavaj'
```

## 🧪 Testing

Package ini menggunakan Jest untuk testing. Untuk menjalankan test:

```bash
npm test
```

## 📝 License

MIT © Wahyu Nur Fadillah

## 🤝 Contributing

Contributions, issues, dan feature requests dipersilakan! Jangan ragu untuk membuka issue atau pull request.

## 📧 Author

**Wahyu Nur Fadillah**

---

Jika package ini membantu Anda, jangan lupa untuk ⭐ star repository ini!
