function happyHolidays() {
  return "Happy holidays!"
}// write your code below!


function happyHolidaysTo(name) {
var name = name
  return "Happy holidays, " + `${name}` + "!"
}
happyHolidaysTo('you')

function happyHolidayTo(holiday, name){
  var holiday = holiday
  var name = name
  return "Happy " + `${holiday}` + ", " + `${name}` + "!"
}

function holidayCountdown(holiday, days){
  var holiday = holiday
  var days = days
  return "It\'s " + `${days}` + " days until " + `${holiday}` + "!"
}
