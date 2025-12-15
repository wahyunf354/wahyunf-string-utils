function capitalize(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverse(text) {
  return text.split("").reverse().join("");
}

module.exports = {
  capitalize,
  reverse,
};
