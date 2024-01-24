export const calcTotal = (numOne, numTwo, symbol) => {
  let total = 0;
  switch (symbol) {
    case "+":
      total = numOne + numTwo;
      break;
    case "-":
      total = numOne - numTwo;
      break;
    case "/":
      total = numOne / numTwo;
      break;
    case "*":
      total = numOne * numTwo;
      break;
    default:
      break;
  }
  return total;
};
