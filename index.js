// write your code below!
var name = "you"
var holiday = "Independence Day"
var days = 20
var holi = "Mother's Day"


function happyHolidays(){
  return("Happy holidays!")
}

function happyHolidaysTo(name){
  if (name === 'you'){
    return (`Happy holidays, ${name}!`)
  }

}

function happyHolidayTo(holiday,name){
  return (`Happy ${holiday}, ${name}!`)
}

function holidayCountdown(holi,days){
  return(`It's ${days} days until ${holi}!`)
}
