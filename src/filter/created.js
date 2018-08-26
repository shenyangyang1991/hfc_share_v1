const JUST = 60 * 5
const MINUTE = 60 * 60
const HOUR = MINUTE * 24
const DAY = HOUR * 30
const MONTH = DAY * 12
const CN_ZONE = 8 * 3600 * 1000

export function FormatDate(format) {
  if (format && typeof format === 'string' && format.length == 25) {
    format = format.slice(0, -6)
  } else {
    return ''
  }
  
  let timestamp = (new Date(format)).getTime() + CN_ZONE
  let now = Date.now()

  let time = (now - timestamp)/1000
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
