// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return "Happy holidays, " + name + "!";
}

happyHolidaysTo("Helga");

function happyHolidayTo(holiday, name){
  return "Happy " + holiday + ", " + name + "!"
}

happyHolidayTo("easter", "helga");

function holidayCountdown(holiday, days){
  return "It\'s " + days + " days until " + holiday +"!";
}

holidayCountdown("easter", 5)
