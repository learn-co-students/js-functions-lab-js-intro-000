// write your code below!
function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name) { // "name" = "you"
   return `Happy holidays, ${name}!`; // => "Happy holidays, you!"
}

function happyHolidayTo(holiday, name) { // "holiday" = "Independence day" "name" = "you"
  return `Happy ${holiday}, ${name}!`; // => "Happy Independence day, you!"
}

function holidayCountdown(holiday, days){ // "holiday" = "Mother's Day" "days" = "20"
  return `It\'s ${days} days until ${holiday}!`; // => "It's 20 days until Mother's Day"
}
