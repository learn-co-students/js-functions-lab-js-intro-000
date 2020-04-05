// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
console.log(happyHolidays());


function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}
console.log(happyHolidaysTo('hoang'));

function happyCustomHolidayTo(holiday,name) {
  return `Happy ${holiday}, ${name}!`;
}
console.log(happyCustomHolidayTo("New Year","Hoang"));


function holidayCountdown(holiday,days) {
  return `It's ${days} days until ${holiday}!`;
}
console.log(holidayCountdown("Chrismas",45));
