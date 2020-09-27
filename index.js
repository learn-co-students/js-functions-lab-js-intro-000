// writer code below!
function happyHolidays()  {
  return "Happy holidays!"
}

function happyHolidaysTo(name)  {
  var name1 = "everyone"
  var name2 = "you"
  return(`Happy holidays, ${name}!`)
  expect(`Happy holidays, ${name1}!`).toEqual("Happy holidays, everyone!")
  expect(`Happy holidays, ${name2}!`).toEqual("Happy holidays, you!")
}

function happyCustomHolidayTo(holiday, name)  {
  var holiday1 = "Independence Day"
  var holiday2 = "New Year"
  var name1 = "you"
  var name2 = "everyone"
  return(`Happy ${holiday}, ${name}!`)
  expect(`Happy ${holiday1}, ${name1}!`).toEqual("Happy Independence Day, you!")
  expect(`Happy ${holiday2}, ${name2}!`).toEqual("Happy New Year, everyone!")
}

function holidayCountdown(holiday, days)  {
  var holiday1 = "Mother's Day"
  var holiday2 = "Father's Day"
  var days1 = "20"
  var days2 = "120"
  return(`It's ${days} days until ${holiday}!`)
  expect(`It's ${days1} days until ${holiday1}!`).toEqual("It's 20 days until Mother's Day!")
  expect(`It's ${days2} days until ${holiday2}!`).toEqual("It's 120 days until Father's Day!")  
}
