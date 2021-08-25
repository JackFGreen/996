/**
 * 配置
 *
 * @export
 * @param {*} { base = 18, data }
 * @returns {*} { date, to, count}
 */
export default function getConfig({ base = 18, data }) {
  return data.map((o) => {
    let { count, from, to } = o
    count = count ?? 0
    to = to ?? base

    count = (to * 100 - (from || base) * 100) / 100
    to = from ? to + count : to

    return {
      ...o,
      count,
      to,
    }
  })
}
