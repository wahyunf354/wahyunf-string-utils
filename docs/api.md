# 📚 API Documentation

## `capitalize(text)`

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

## `reverse(text)`

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

## `isPalindrome(text)`

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

## `truncate(text, length)`

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

## `camelCase(text)`

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

## `snakeCase(text)`

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

## `kebabCase(text)`

Mengubah string menjadi format kebab-case.

**Parameters:**

- `text` (string, required): String yang akan diubah

**Returns:**

- (string): String dalam format kebab-case

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { kebabCase } = require("@wahyunf/string-utils");

kebabCase("hello world"); // 'hello-world'
kebabCase("Hello World"); // 'hello-world'
kebabCase("JAVA script"); // 'java-script'
kebabCase("foo bar baz"); // 'foo-bar-baz'
kebabCase("hello   world"); // 'hello-world' (multiple spaces become single hyphen)
kebabCase(""); // ''
kebabCase("hello"); // 'hello'
kebabCase("HELLO"); // 'hello'

// Error handling
kebabCase(123); // Error: Input harus string
kebabCase(null); // Error: Input harus string
```

## `trimAll(text)`

Menghapus spasi di awal dan akhir, serta menormalkan multiple spaces menjadi 1 spasi.

**Parameters:**

- `text` (string, required): String yang akan diproses

**Returns:**

- (string): String yang sudah dibersihkan

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { trimAll } = require("@wahyunf/string-utils");

trimAll("  hello world  "); // 'hello world'
trimAll("  hello   world  "); // 'hello world'
trimAll("hello\tworld"); // 'hello world'
```

## `slugify(text)`

Mengubah string menjadi format slug (huruf kecil, memisahkan kata dengan strip, dan menghapus karakter spesial).

**Parameters:**

- `text` (string, required): String yang akan diubah menjadi slug

**Returns:**

- (string): String dalam format slug

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { slugify } = require("@wahyunf/string-utils");

slugify("Hello World"); // 'hello-world'
slugify("foo bar baz"); // 'foo-bar-baz'
slugify("JAVA script"); // 'java-script'
slugify("abc123"); // 'abc-123'
```

## `isEmpty(text)`

Mengecek apakah sebuah string kosong atau hanya berisi whitespace (spasi, tab, newline).

**Parameters:**

- `text` (string, required): String yang akan dicek

**Returns:**

- (boolean): `true` jika string kosong atau hanya berisi whitespace, `false` jika tidak

**Throws:**

- `Error`: Jika input bukan string

**Examples:**

```javascript
const { isEmpty } = require("@wahyunf/string-utils");

isEmpty(""); // true
isEmpty("   "); // true
isEmpty("\t\n"); // true
isEmpty("hello"); // false
isEmpty("  hello  "); // false
```
