//day 1 restart
function twoSort(s){
    return s.sort()[0].split('').join('***');
    
}

//adding sum of only postives
function positiveSum(arr){
    return arr.reduce((a,b) => a+ ( b>0 ? b : 0),0);
}
//fixing switch with breaks
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

  //day2 codewars

  function checkAlive (health) {
    if ( health <= 0) {
      return false
    } 
    else {
      return true
    }
  }
//removing first and last char
  function removeChar(str){
    return str.slice(1,-1)
   };

//removing everyother element
function removeEveryOther(arr){
  return arr.filter((element, index) => index%2===0 )
}

//returning negatives
function makeNegative(num) {
  return num<0 ? num : num *-1;
  }
  
//if already neg return the way it is, if postive return
//negative of itself 

//reversed strings
function solution(str){
  return str.split('').reverse().join('')
}
//testing grades
function testResult(array) {
  const totalMarks = array.length;
  if (totalMarks === 0) {
      return [0, { h: 0, a: 0, l: 0 }];
  }

  const classSum = array.reduce((acc, mark) => acc + mark, 0)
  const classAverage = (classSum / totalMarks).toFixed(3)

  const highMarks = array.filter(mark => mark === 9 || mark === 10).length
  const averageMarks = array.filter(mark => mark === 7 || mark === 8).length
  const lowMarks = totalMarks - highMarks - averageMarks

  const markDistribution = { h: highMarks, a: averageMarks, l: lowMarks }

  if (highMarks === totalMarks) {
      return [parseFloat(classAverage), markDistribution, "They did well"]
  } else {
      return [parseFloat(classAverage), markDistribution]
  }
}

//day 3 of codewars
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

//day 4 of codewars 
//century from year

function century(year){
  let century = Math.floor((year-1)/100) + 1;
  return century;
}

const century = year => Math.ceil(year/100)

//day 5 of cw
//doubling
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i;
}

function sayHello(name, city, state) {
  const fullName = name.join(' ');
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

function lastFibDigit(n) {
  const period = 60;
  const remainder = n % period;
  let fibPrev = 0;
  let fibCurrent = 1;

  if (remainder === 0) return 0;
  if (remainder === 1) return 1;

  for (let i = 2; i <= remainder; i++) {
    [fibPrev, fibCurrent] = [fibCurrent, (fibPrev + fibCurrent) % 10];
  }

  return fibCurrent;
}

//day6 of cw
function lovefunc(flower1, flower2){
  if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
      return true;
  } else {
      return false;
  }
}

//better code
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

function printArray(array){
  return array.join(',')
 }

//day 7 of CW
function grow(x){
  return x.reduce ((acc,cum) => acc * cum,1)
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

function solution(number){
  if (number < 0){
    return 0;
  }
  let sum=0;
  for (let i=0; i < number; i++){
    if (i%3 === 0 || i%5 === 0){
      sum += i;
    }
  }
  return sum;

}

//day 8 of CW
function NoBoringZeros(n){
  while (n%10==0 && n!=0){
    n/=10;
  }
  return n;
}

function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = new Set();

  for (const char of sentence) {
    if (/^[a-zA-Z]$/.test(char)) {
      letters.add(char.toLowerCase());
    }
  }

  for (const letter of alphabet) {
    if (!letters.has(letter)) {
      return false;
    }
  }

  return true;
}

//BETTER CODE
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

//day 9 of CW
//RETURN ARRAY WITH VALUES DOUBLED
function maps(x){
  return x.map((x) => {return x*2});
}

function dropWhile(array, predicate) {
  let index = 0;
  while (index < array.length && predicate(array[index])) {
    index++;
  }
  return array.slice(index);
}

//better
function dropWhile(arr, pred) {
  for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
  return arr.slice(i)
}

//FIND ODD AND DN INCREMEN
function findOdd(A) {
  return A.find((item) => A.filter(i => i === item).length % 2 !== 0);
}

//bterer
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//day 10 of CW
function abbrevName(name){
  return name.split(' ').map(word=> word[0].toUpperCase()).join('.')
}
//DAY11 OF cw
function getCount(str) {
  return str.split('').filter((char) => 'aeiou'.includes(char)).length;
}

//day12 of CW missed a day 
//max and min of list
var min = function(list){
    
  let sorted = list.sort((a,b) => a-b)
  return sorted[0] 
}

var max = function(list){
    
  let sorted = list.sort((a,b) => a-b)
  return sorted[sorted.length-1] 
}
