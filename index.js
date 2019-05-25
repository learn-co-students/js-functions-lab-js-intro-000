// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

/*function happyHolidaysTo(name){
  return `Happy Holidays ${name}`;
}*/

var happyHolidaysTo = (name) => `Happy holidays, ${name}!`;
var happyHolidayTo = (fest,name) => `Happy ${fest}, ${name}!`;
var holidayCountdown = (fest,days) => `It's ${days} days until ${fest}!`;
