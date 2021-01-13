/**
 * 配置
 *
 * @export
 * @param {*} { base = 18, from, to, data }
 * @returns {*} { date, to, count}
 */
export default function getConfig({ base = 18, data }) {
  return data.map((o) => {
    return {
      ...o,
      count: (o.to * 100 - (o.from || base) * 100) / 100,
    }
  })
}
