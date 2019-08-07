// write your code below!
function happyHolidays() {
  return ("Happy holidays!")
}

function happyHolidaysTo(name) {
  function('you'){
  return ("Happy holidays, ${name}!")
 }
}

function happyHolidayTo(holiday, name) {
  return ("Happy ${holiday}, ${name}!")
  happyHolidayTo('Independence Day', 'you')
}


function holidayCountDown(holiday, days) {
  return ("It\'s ${days} until ${holiday}!")
  holidayCountDown("Mother's Day", 20)
}
