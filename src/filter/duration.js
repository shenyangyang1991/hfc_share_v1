const MINUTE = 60
const HOUR = 60

export function FormatTime(format) {
  let time = parseInt(format)
  let second = time % MINUTE
  let minute = parseInt(time / MINUTE) % HOUR
  let hour = parseInt(time / MINUTE / HOUR)

  return `${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}`
}