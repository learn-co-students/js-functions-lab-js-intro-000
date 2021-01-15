//1. write a function named happyHolidays
//2. make function accept NO parameters.
//3. make return string Happy holidays!
function happyHolidays() {
  return'Happy holidays!'
}

//1.write a function named happyHolidaysTo()
//2. make function that accepts name of the person to wish happy holidays
//3. make return Happy holidays, ${name}!
function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}
let name = 'gracie'

//1. write a function named happyCustomHolidayTo()
//2. make function accept 2 parameters, the holiday
//2. to wish them well for and the name of the person we are wishing well.
//3. first pass in the holiday then pass in the name.
//4. make function return the string Happy ${holiday}, ${name}!

function happyCustomHolidayTo(holiday, name) {
  return(`Happy ${holiday}, ${name}!`)
}

//1. write a function named holidayCountdown
//2. function needs to accept two parameters the holiday name and
//2. number of day until that holiday.
//3. make it return a string It's ${days}, days until ${holiday}!
//4. holidayCountdown should take in holiday name first then days until.

function holidayCountdown(holiday, days) {
  return(`It's ${days} days until ${holiday}!`)
}
let days = 20
