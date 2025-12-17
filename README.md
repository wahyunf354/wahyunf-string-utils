# @wahyunf/string-utils

![License](https://img.shields.io/npm/l/@wahyunf/string-utils?style=flat-square)
![Version](https://img.shields.io/npm/v/@wahyunf/string-utils?style=flat-square)
![Downloads](https://img.shields.io/npm/dm/@wahyunf/string-utils?style=flat-square)

**@wahyunf/string-utils** adalah utility library ringan untuk manipulasi string di JavaScript. Dirancang untuk sederhana, mudah digunakan, dan tanpa dependensi berat.

## ✨ Features

- **Capitalize**: Mengkapitalisasi huruf pertama sebuah string.
- **Reverse**: Membalikkan urutan karakter string.
- **Palindrome Check**: Memeriksa apakah string adalah palindrome.
- **Truncate**: Memotong string panjang dengan ellipsis.
- **CamelCase**: Mengubah string menjadi format camelCase.
- **SnakeCase**: Mengubah string menjadi format snake_case.
- **KebabCase**: Mengubah string menjadi format kebab-case
- **TrimAll**: Menghapus spasi di awal dan akhir string dan mengganti spasi ganda menjadi satu spasi.
- **Slugify**: Mengubah string menjadi format slug.
- **IsEmpty**: Mengecek apakah string kosong atau hanya berisi spasi.

## 📦 Installation

Install package menggunakan npm:

```bash
npm install @wahyunf/string-utils
```

Atau menggunakan yarn:

```bash
yarn add @wahyunf/string-utils
```

## � Usage

```javascript
const {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  camelCase,
  snakeCase,
} = require("@wahyunf/string-utils");

// Capitalize
console.log(capitalize("hello world")); // "Hello world"

// Reverse
console.log(reverse("hello")); // "olleh"

// Palindrome
console.log(isPalindrome("racecar")); // true

// Truncate
console.log(truncate("This is a long sentence", 10)); // "This is a ..."

// Case Conversion
console.log(camelCase("hello world")); // "helloWorld"
console.log(snakeCase("Hello World")); // "hello_world"
console.log(kebabCase("Hello World")); // "hello-world"

// TrimAll
console.log(trimAll("   hello world   ")); // "hello world"

// Slugify
console.log(slugify("Hello World")); // "hello-world"

// IsEmpty
console.log(isEmpty("")); // true
console.log(isEmpty("   ")); // true
console.log(isEmpty("hello")); // false
```

## 📚 Documentation

Dokumentasi lengkap mengenai API dan penggunaan detail dapat dilihat di:

👉 **[API Documentation](docs/api.md)**

## 🧪 Testing

Jalankan unit test menggunakan Jest:

```bash
npm test
```

## 🤝 Contributing

Kontribusi sangat diterima! Silakan buka [Issues](https://github.com/wahyunf354/wahyunf-string-utils/issues) atau [Pull Request](https://github.com/wahyunf354/wahyunf-string-utils/pulls) untuk perbaikan atau penambahan fitur.

## � License

MIT © [Wahyu Nur Fadillah](https://github.com/wahyunf354)

---

_Dibuat dengan ❤️ oleh Wahyu Nur Fadillah_
