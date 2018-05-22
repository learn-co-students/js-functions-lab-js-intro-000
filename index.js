var happyHolidays = function() {
  return "Happy holidays!";
};

var happyHolidaysTo = function(name) {
  return `Happy holidays, ${name}!`;
};
happyHolidaysTo(you);

var happyHolidayTo = function(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}


var holidayCountdown = function(days, holiday) {
  return `It\'s ${days} days until ${holiday}!`;
}
holidayCountdown(20, "Mother's Day");
