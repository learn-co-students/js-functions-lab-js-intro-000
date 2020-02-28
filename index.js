function happyHolidays() {
    return "Happy holidays!";}


happyHolidaysTo('Yann')
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
    }

happyHolidaysTo("Labor Day",'Yann')
function happyCustomHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}

holidayCountdown("3","Labor Day")
function holidayCountdown(holiday,days){
  return `It's ${days} days until ${holiday}!`;
}
