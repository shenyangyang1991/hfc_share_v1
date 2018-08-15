const JUST = 60 * 5
const MINUTE = 60 * 60
const HOUR = MINUTE * 24
const DAY = HOUR * 30
const MONTH = DAY * 12

export function FormatDate(format) {
  let timestamp = (new Date(format)).getTime()
  let now = Date.now()

  let time = now - timestamp
  if (time < JUST) {
    return '刚刚'
  } else if (time >= JUST && time < MINUTE) {
    return `${parseInt(time / 60)}分钟前`
  } else if (time >= MINUTE && time < HOUR) {
    return `${parseInt(time / MINUTE)}小时前`
  } else if (time >= HOUR && time < DAY) {
    return `${parseInt(time / HOUR)}天前`
  } else if (time >= DAY && time < MONTH) {
    return `${parseInt(time / DAY)}个月前`
  } else if (time >= MONTH) {
    return `${parseInt(time / MONTH)}年前`
  } else {
    return format
  }
}
