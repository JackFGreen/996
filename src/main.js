import data from './data/index.js'
import getConfig from './config.js'

data.forEach((o) => {
  const charData = getConfig(o.config)

  const len = charData.length

  const to = charData.reduce((pre, cur) => {
    return (pre += cur.to)
  }, 0)
  const toAvg = (to / len).toFixed(2)

  const count = charData.reduce((pre, cur) => {
    return (pre += cur.count)
  }, 0)
  const countAvg = (count / len).toFixed(2)

  /**
   * dom
   */
  const infoEl = document.createElement('div')
  const title = o.title
  infoEl.innerText = `${title} - ${len} - ${countAvg} - ${toAvg}`

  const contEl = document.createElement('div')
  const contElId = title
  contEl.id = contElId

  const wrapEL = document.createElement('div')
  wrapEL.className = 'wrap'
  wrapEL.appendChild(infoEl)
  wrapEL.appendChild(contEl)

  const rootEl = document.getElementById('root')
  rootEl.appendChild(wrapEL)

  /**
   * chart
   */
  const { DualAxes } = G2Plot
  const chart = new DualAxes(contElId, {
    data: [charData, charData],
    xField: 'date',
    yField: ['count', 'to'],
    geometryOptions: [
      {
        geometry: 'column',
      },
    ],
    legend: '',
  })

  chart.render()
})
