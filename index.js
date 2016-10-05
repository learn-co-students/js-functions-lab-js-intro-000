// write your code below!
function happyHolidays(){
  return "Happy holidays!"
}
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
  return happyHolidaysTo("you")
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
  return happyHolidayTo("Independence Day", "you")
}
function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
  return holidayCountdown("Mother's Day",20)
}
