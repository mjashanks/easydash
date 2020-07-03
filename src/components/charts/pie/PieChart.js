import britecharts from "britecharts"

export default ({container, chart, data, height, width}) => {
  const donutChart = britecharts.donut() 

  const pieData = data.reduce((all, item) => {
    let group = all.find(i => i.name === item[chart.groupBy])
    if (!group) {
      const name = item[chart.groupBy];
      group = { name, id: name, quantity: 0 }
      all.push(group)
    }
    group.quantity += 1
    return all
  }, [])

  donutChart
    .isAnimated(true)
    .width(width)
    .height(height)
    .externalRadius(width / 2.5)
    .internalRadius(width / 5)

  container.datum(pieData).call(donutChart);
}
