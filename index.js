// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return "Happy holidays, " + name + "!"; // string interpolation ${} won't pass the test for some reason
}

function happyHolidayTo(holiday, name) {
    return "Happy " + holiday + ", " +  name + "!";
}

function holidayCountdown(holiday, days) {
  return "It's " + days + " days until " + holiday + "!";
}
