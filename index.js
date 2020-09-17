// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happyCustomHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, numOfDays) {
  return `It's ${numOfDays} days until ${holiday}!`
}

console.log(happyHolidays())
console.log(happyHolidaysTo('Jordan'))
console.log(happyCustomHolidayTo('Halloween', 'Jordan'))
console.log(holidayCountdown("Mother's Day", "20"))
