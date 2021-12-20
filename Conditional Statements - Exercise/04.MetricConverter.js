function solve(input) {
  let number = Number(input[0]);
  let inputValue = input[1];
  let outPutValue = input[2];

  if (inputValue === "mm" && outPutValue === "m") {
    number = number / 1000;
  } else if (inputValue === "m" && outPutValue === "mm") {
    number = number * 1000;
  } else if (inputValue === "cm" && outPutValue === "m") {
    number = number / 100;
  } else if (inputValue === "m" && outPutValue === "cm") {
    number = number * 100;
  } else if (inputValue === "mm" && outPutValue === "cm") {
    number = number / 10;
  } else if (inputValue === "cm" && outPutValue === "mm") {
    number = number * 10;
  }
  console.log(number.toFixed(3));
}
solve(["12", "mm", "m"]);
solve(["150", "m", "cm"]);
solve(["45", "cm", "mm"]);
