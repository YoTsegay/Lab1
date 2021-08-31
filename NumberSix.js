function countD(num) {
  let sum = 0;

  while (true) {
    let x = num % 10;
    sum = sum + x;
    num = Math.floor(num / 10);
    if (num < 10) {
      break;
    }
  }
  sum = sum + num;

  return sum;
}
console.log(countD(123));
