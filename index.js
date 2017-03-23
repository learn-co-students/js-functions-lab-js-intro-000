// write your code below!
function happyHolidays(){
  var greetings = "Happy holidays!";
  return greetings;
}
happyHolidays()


function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo (`Alex`)


function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
happyHolidayTo(`Christmass`, `Alex`)


function holidayCountdown(holiday, days) {
    return `It\'s ${days} days until ${holiday}!`;
}
holidayCountdown(`Yom Khuledet`, 12)
