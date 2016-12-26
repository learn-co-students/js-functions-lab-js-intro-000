// write your code below!
///////////////////////////////////////////////////////////////////////////////
/*
1. Write a function named `happyHolidays`. This function should not accept any
parameters and should return the string `"Happy holidays!"`.
*/
function happyHolidays() {
   return  "Happy holidays!"
}
/*
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })
*/
///////////////////////////////////////////////////////////////////////////////
// write your code below!
///////////////////////////////////////////////////////////////////////////////
/*
2. Write a function named `happyHolidaysTo`. This function should accept a
parameter of the name of the person you want to wish happy holidays, and return
the string `"Happy holidays, ${name}!"`
*/
function happyHolidaysTo( nameTo ) {
   return `Happy holidays, ${nameTo}!`
}
/*
describe('happyHolidaysTo(name)', () => {
  it('returns "Happy holidays, ${name}!"', () => {
    expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
  })
})

*/
///////////////////////////////////////////////////////////////////////////////
// write your code below!
///////////////////////////////////////////////////////////////////////////////
/*
3. Write a function named `happyHolidayTo`. This function should accept two
parameters, the holiday you want to wish them well for, and the name of the
person you're wishing well. This function should return the string
`"Happy ${holiday}, ${name}!"`
*/
function happyHolidayTo( holidayWhat , nameTo ) {
   return `Happy ${holidayWhat}, ${nameTo}!`
}
/*
describe('happyHolidayTo(holiday, name)', () => {
  it('returns "Happy ${holiday}, ${name}!"', () => {
    expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
  })
})

*/
///////////////////////////////////////////////////////////////////////////////
// write your code below!
///////////////////////////////////////////////////////////////////////////////
/*
4. Write a function named `holidayCountdown`. This function should accept two
parameters, the holiday name and number of days till that holiday. The function
should return the string `"It's ${days} days until ${holiday}!"`
*/
function holidayCountdown( holidayWhat , daysUntil ) {
   return `It's ${daysUntil} days until ${holidayWhat}!`
}
/*

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
*/
///////////////////////////////////////////////////////////////////////////////
