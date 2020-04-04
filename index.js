// write your code below!
//happyHolidays should not accept any parameters and return the string "Happy holidays!"
function happyHolidays() {
  return 'Happy holidays!'
}

//happyHolidaysTo with name parameter
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

//happyCustomHolidayTo parameters pass holiday, then name
function happyCustomHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

//holidayCountdown parameters pass number of days until holiday
function holidayCountdown(holiday, days) {
  return `It\'s ${days} days until ${holiday}!`
}
