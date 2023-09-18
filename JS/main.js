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