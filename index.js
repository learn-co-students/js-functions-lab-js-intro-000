// write your code below!
function happyHolidays() {
  var what = "Happy holidays!"
  return what
}
happyHolidays();

function happyHolidaysTo(name) {
return `Happy holidays, ${name}!`;
}
happyHolidaysTo("you");

function happyCustomHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
happyCustomHolidayTo("NewYear", " Tenirlan")

function holidayCountdown(holiday, days){
  return `It\'s ${days} days until ${holiday}!`;
}
holidayCountdown(" Mother's day", 20);
