unction happyHolidays() {
return "Happy holidays!"
}
function happyHolidaysTo(name) {
return `Happy holidays, ${name}!`
}
function happyHolidayTo(holiday, name) {
return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, days) {
return `It's ${days} days until ${holiday}!`
}

happyHolidaysTo("you")
happyHolidaysTo("everyone")
happyHolidaysTo("New Year", "everyone")
happyHolidayTo("Independence Day", "you")
holidayCountdown("Mother\'s Day", 20)
holidayCountdown("Father's Day", 120)
