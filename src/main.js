import data from './data.js'
import getConfig from './config.js'

const charData = getConfig({ data })

const len = data.length

const to = charData.reduce((pre, cur) => {
  return (pre += cur.to)
}, 0)
const toAvg = to / data.length
console.log(toAvg)

const count = charData.reduce((pre, cur) => {
  return (pre += cur.count)
}, 0)
const countAvg = count / data.length
console.log(countAvg)

const { DualAxes } = G2Plot

const chart = new DualAxes('container', {
  data: [charData, charData],
  xField: 'date',
  yField: ['count', 'to'],
  geometryOptions: [
    {
      geometry: 'column',
    },
  ],
})

chart.render()

console.log(data)
