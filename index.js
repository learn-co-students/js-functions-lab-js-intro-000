// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  var n = name
  return `Happy holidays, ${n}`+`!`
}

function happyHolidayTo(holiday, name){
  var h = holiday
  var n = name
  return `Happy ${h}, ${n}`+`!`
}

function holidayCountdown(holiday, daysTill){
  var days = daysTill
  var h = holiday
  return `It\'s ${days} days until ${h}!`
}
