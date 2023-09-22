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