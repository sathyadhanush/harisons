// export function delay(number) {
//   // eslint-disable-next-line no-promise-executor-return
//   return new Promise((res) => setTimeout(res, number));
// }

export function getStringByComma(string) {
  return string.trim().split(' ').filter((s) => s.length !== 0).toString();
}

// export function capitalize() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// }
