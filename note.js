function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}


function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

function findUniq(arr) {
  let n = -1;
  for (let i = 0; i<arr.length; i++) {
    if (arr.indexOf(arr[i])== arr.lastIndexOf(arr[i]))  {
      n = arr.indexOf(arr[i]);
      break;
    }
  }
  return n;
}

function same(a, b){
  a=a.map(x=>x.sort().join('=')).sort().join('+');
  b=b.map(x=>x.sort().join('=')).sort().join('+');
  return a==b;
}


function onlyDuplicates(str) {
  return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('')
}