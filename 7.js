let arr = [1, 2, 3, 4, 5, 6, true, null, 0];
let even = 0;
let odd = 0;
let zero = 0;
console.log(typeof even);
console.log(typeof odd);
arr.forEach(function (item) {
  if (typeof item === "number" && !isNaN(item)) {
    if (item === 0) {
      zero++;
    } else if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
});
console.log(`В массиве чётных: - ${even}, нечётных - ${odd}, нулей - ${zero}`);
