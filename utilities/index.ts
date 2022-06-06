export const sum = ({ a, b }: { a: number; b: number }): number => a + b

console.log(sum({ a: 1, b: 2 }))

export const formatAMPM = (date: Date) => {
  let hours = date.getHours()
  let minutes: number | string = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours %= 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes

  const strTime = `${hours}:${minutes} ${ampm}`

  return strTime
}
