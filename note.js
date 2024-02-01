'use strict'
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

function removeUrlAnchor(url){
  return url.includes('#')? url.slice(0, url.indexOf('#')) : url
}


function order(words){
  const arr = words.split(' ');
  let newArr = [];
  for (let i =0; i<arr.length; i++) {
    const index = arr[i].split('').filter(e=>e>0);
    newArr[index-1] = arr[i];
  }
  return newArr.join(' ');
  
}

function solution(str){ 
  if (str.length ===0) {
    return [];
  }
  const newArr = [];
  for (let i =0; i<str.split('').length; i= i+2) {
      newArr.push(str.slice(i,i+2));
  }
  if (newArr[newArr.length-1].length === 1) {
    newArr[newArr.length-1] +='_';
  }
  return newArr;
}


function solution(string) {
  return string.split('').map((item)=> item == item.toUpperCase()? item=` ${item}`: item = item).join('')
}

function count(string) {
  const obj = {}
  string.split('').forEach((item) =>{
     obj[item] ? obj[item]++ : obj[item] =1;
      })
  return obj;
}

