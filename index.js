
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
  happyHolidaysTo('you')
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
  happyHolidayTo('ind', 'u')
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
  holidayCountdown('ma', '20')
}
