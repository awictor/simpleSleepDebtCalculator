const getSleepHours = (day) => {
  if( day === 'Monday') {
    return 8
  } else if ( day === 'Tuesday') {
    return 8
  } else if ( day === 'Wednesday') {
    return 8
  } else if ( day === 'Thursday') {
    return 8
  } else if ( day === 'Friday') {
    return 8
  } else if ( day === 'Saturday') {
    return 8
  } else if ( day === 'Sunday') {
    return 8
  }
};

//console.log(getSleepHours('Tuesday')) //number of hours I slept on Tuesday

const getActualSleepHours = () => 
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')

//former function
// const getIdealSleepHours = () => {
//   idealHours = 7.5
//   return idealHours * 7
// };

//console.log(getActualSleepHours()); // sum of sleep hours / week

//console.log(getIdealSleepHours()); // idealHours = 7.5 . So 7.5 * 7 

const getIdealSleepHours = idealHours => idealHours * 7 //alternative function

calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(7.5)//with updated function
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got your ideal amount of sleep last night! aka you got ' + (actualHoursofSleep) + '. You received just the right amount of rest last week.')
  } 
  else if  (actualSleepHours > idealSleepHours) {
    console.log('You got more than your ideal amount of sleep last night! aka you got ' + (idealSleepHours - actualSleepHours) + ' less than your ideal hours of sleep last week.')
  }
  else if  (actualSleepHours < idealSleepHours) {
    console.log('You got less than your ideal amount of sleep last night! aka you got ' + (idealSleepHours - actualSleepHours) + ' less than your ideal hours of sleep last week. You are not well rested and should get more sleep when possible.')
  }
}

calculateSleepDebt()
