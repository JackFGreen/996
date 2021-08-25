/**
 * 配置
 *
 * @export
 * @param {*} { base = 18, data }
 * @returns {*} { date, to, count}
 */
export default function getConfig({ base = 18, data }) {
  return data.map((o) => {
    const count = (o.to * 100 - (o.from || base) * 100) / 100
    const to = o.from ? o.to + count : o.to
    return {
      ...o,
      count,
      to,
    }
  })
}
