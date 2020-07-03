<script>
import * as d3 from "d3-selection"
import PieChart from "./pie/PieChart"
import BarChart from "./bar/BarChart"
import store from "../../store"

export let chart
export let data

const charts = {
  Pie: PieChart,
  Bar: BarChart,
}

let chartDiv

$: container = chartDiv && d3.select(chartDiv)
$: if (chart && container) charts[chart.type]({
    chart, container, data,
    height: 400, 
    width: 400,
  })

</script>

<div bind:this={chartDiv}>
</div>

<style>

</style>