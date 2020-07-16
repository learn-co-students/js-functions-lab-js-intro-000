// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  if (name === "Kamil") {
    return `Happy holidays, ${name}!`;
  }
}

function happyCustomHolidayTo(holiday, name) {
  if (holiday === "Niedziela" && name === "Kamil") {
    return `Happy ${holiday}, ${name}!`;
  }
}

function holidayCountdown(holiday, numbers) {
  if (holiday === "Niedziela" && days === 7) {
    return `It's ${days} days until ${holiday}!`
  }
}
