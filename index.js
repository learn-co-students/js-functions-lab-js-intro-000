function happyHolidays(){       //tell user Happy Holiday
  return "Happy holidays!"
}

function happyHolidaysTo(Justine){    //give a custom greating
  return `Happy holidays, ${Justine}!`
}

function happyCustomHolidayTo(holiday=" Day", name="Justine"){  //give a custom greeting for any holiday
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown (holiday="Mother\'s", days=20){       //count down the days till a holiday
  return `It\'s ${days} days until ${holiday}!`
}
