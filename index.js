// write your code below!
var happyHolidays = function happyHolidays(){
  return 'Happy holidays!';
}
happyHolidays();
var happyHolidaysTo = function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo('Carlos');
function happyCustomHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}
happyCustomHolidayTo('Halloween','Carlos');
function holidayCountdown(holiday,days){
  return`It's ${days} days until ${holiday}!`;
}
holidayCountdown('Halloween',20);
