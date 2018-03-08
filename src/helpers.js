export function pad(number, width) {
  width -= number.toString().length;
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
  }
  return number + ""; // always return a string
}

export function toMinutes(milliseconds) {
  const seconds = milliseconds / 1000;

  const numSeconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
  const numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);

  return pad(numMinutes, 2) + ":" + pad(numSeconds, 2);
}
