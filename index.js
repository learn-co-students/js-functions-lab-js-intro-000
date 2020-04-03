function happyHolidays() {
  var string;
  string = "Happy holidays!"
  return string
}

function happyHolidaysTo(name = Jessie) {
  return `Happy holidays, ${name}!`;
}

function happyCustomHolidayTo(holiday = Independence, name = Jessie) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday = Independence, days = 45) {
  return `It's ${days} days until ${holiday}!`;
}
