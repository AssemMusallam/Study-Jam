let num1 = 10;
let num2 = 20;
let num3 = 5;

let greatest = 0;

num1 > num2 && num1 > num3
  ? (greatest = num1)
  : num2 > num3 && num2 > num3
  ? (greatest = num2)
  : (greatest = num3);

  console.log(greatest)
