const d = new Date()

const day = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday'
}

const key = d.toString().slice(0, 3)
const time = d.toString().slice(16, 24)
const hour = time.slice(0, 2)
const AMPM = hour <= 12 ? `${hour} AM` : `${hour - 12} PM`
const min = time.slice(3, 5)
const sec = time.slice(6, 8)

console.log(`Today is: ${day[key]}.`)
console.log(`Current time is : ${AMPM} : ${min} : ${sec}`)
