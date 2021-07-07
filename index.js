// // write your code below!
function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyCustomHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
// 4. Write a function named `holidayCountdown`. This function should accept two
//    parameters, the holiday name and number of days until that holiday. The
//    function should return the string
//    `` `It's ${days} days until ${holiday}!` ``. Note that although `days` is
//    used first when constructing the returned string, `holidayCountdown` should
//    take in the holiday name first, then the days until that holiday.
