const daystext = document.querySelector('#days')
const hourstext = document.querySelector('#hours')
const minutestext = document.querySelector('#minutes')
const secondstext = document.querySelector('#seconds')

const newYearsDate = new Date ('1 Jan 2024')

setInterval(() => {
const currentDate = new Date()
const totalSeconds = (newYearsDate - currentDate) / 1000

const days = Math.floor((totalSeconds / 3600) / 24)
let hours = Math.floor((totalSeconds / 3600) % 24)
let minutes = Math.floor((totalSeconds / 60) % 60)
let seconds = Math.floor(totalSeconds % 60)

if (hours < 10) {
  hours = '0' + hours
}
if (minutes < 10) {
  minutes = '0' + minutes
}
if (seconds< 10) {
  seconds = '0' + seconds
}

daystext.innerText = (days)
hourstext.innerText = (hours)
minutestext.innerText =(minutes)
secondstext.innerText = (seconds)

}, 1000)
