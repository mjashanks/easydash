import britecharts from "britecharts"

export default ({container, chart, data, height, width}) => {
  /*
  const donutChart = britecharts.bar() 

  const pieData = data.reduce((all, item) => {
    let group = all.find(i => i.name === item[chart.groupBy])
    if (!group) {
      group = { name: item[chart.groupBy], quantity: 0 }
      all.push(group)
    }
    group.quantity += 1
    return all
  }, [])

  donutChart
    .isAnimated(true)
    .highlightSliceById(2)
    .width(width)
    .height(height)
    .externalRadius(width / 2.5)
    .internalRadius(width / 5)

  container.datum(pieData).call(donutChart);
  */
}
