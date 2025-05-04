
function summar() {
    let value = 0;
  return function (num) {
    value += num;
    return value;
  };
}
const sum = summar();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
