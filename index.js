// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
happyHolidaysTo('Dilovar')

function happyCustomHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
happyCustomHolidayTo('Eid', 'Dilovar')

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}
holidayCountdown(5, 'Eid')
