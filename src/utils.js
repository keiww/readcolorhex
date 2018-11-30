/**
 * utils/index.js
 * misc utils functions
*/

export const isHex = (value) => {
  const reg = /^[0-9A-Fa-f]+$/g
  return reg.test(value)
}

// get x in a circle by radians
export const getCircleX = (radians, radius) => {
  return Math.cos(radians) * radius;
}

// get y in a circle by radians
export const getCircleY = (radians, radius) => {
  return Math.sin(radians) * radius;
}

// find closest color in a hex enum
export const findClosestHex = (hex, hexes) => {
  if (!hex || !hexes || !hexes.length) return null
  const differences = hexes.map(_hex => {
    return _hex.split('').reduce((sum, cur, idx) => {
      sum += Math.abs(`0x${cur}` - `0x${hex[idx]}`)
      return sum
    }, 0)
  })
  return hexes[differences.indexOf(Math.min.apply(this, differences))]
}

export const getLightness = (hex) => {
  // let average = hex.split('').reduce((total, cur) => total += parseInt(cur, 16), 0)
  let [r, g, b] = hex + '000'
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  const average = (r + g + b) / 3
  const preset = {light: 15, middle: 8, dark: 0}
  const differences = Object.keys(preset).map(key => Math.abs(average - preset[key]))
  const lightness = Object.keys(preset)[differences.indexOf(Math.min.apply(this, differences))]
  return {
    average,
    lightness
  }
}
export const getSaturation = (hex) => {
  let [r, g, b] = hex + '000'
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  const toppest = Math.max(r, g, b) / 15 * 100
  const lowest = Math.min(r, g, b) / 15 * 100
  const difference = (toppest - lowest) / 100 * 15
  let saturation = difference <= 5
    ? 'muted'
    : difference <= 11
      ? 'washed'
      : 'saturated'
  return {
    toppest,
    lowest,
    saturation
  }
}
