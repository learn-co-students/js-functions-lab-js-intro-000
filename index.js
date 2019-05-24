// write your code below!
function happyHolidays() {
    return "Happy holidays!"
}

//to wish happy holidays to name
function happyHolidaysTo(name) {
  return (`Happy holidays, ${name}!`);
    }

happyHolidaysTo("you");

//to wish certain holiday and person
function happyHolidayTo(holiday, name) {
  return (`Happy ${holiday}, ${name}!`);
}

happyHolidayTo("Independence Day", "name");

//holdidayCountdown
function holidayCountdown (holiday, days) {
  return (`It's ${days} days until ${holiday}!`);
}

holidayCountdown ('Christmas', '99')
