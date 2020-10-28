# JavaScript Functions

## Objectives

1. Write a function that returns a value
2. Write a function that takes in a parameter
3. Write a function that takes in multiple parameters

## Introduction

You'll be writing your solution in `index.js`.

In this lab, we're going to develop our communication skills in JavaScript.
We're feeling festive, so we're going to be wrapping up common holiday greetings
as functions so that we don't have to repeat ourselves. The beauty of functions
is that we could reuse these functions for the text of greeting cards, for
spoken greetings, for song lyrics, etc...

## Instructions

1. Write a function named `happyHolidays`. This function should not accept any
   parameters and should return the string `"Happy holidays!"`.

2. Write a function named `happyHolidaysTo`. This function should accept a
   parameter of the name of the person you want to wish happy holidays, and
   return the string `` `Happy holidays, ${name}!` ``

3. Write a function named `happyCustomHolidayTo`. This function should accept two
   parameters, the holiday you want to wish them well for, and the name of the
   person you're wishing well. Order of parameters matters, so make sure to first pass in the holiday and then the name. This function should return the string
   `` `Happy ${holiday}, ${name}!` ``

4. Write a function named `holidayCountdown`. This function should accept two
   parameters, the holiday name and number of days until that holiday. The
   function should return the string 
   `` `It's ${days} days until ${holiday}!` ``. Note that although `days` is
   used first when constructing the returned string, `holidayCountdown` should
   take in the holiday name first, then the days until that holiday.
