<script>
import store from "../store"
import defaultSettings from "./charts/defaultSettings"
import ChartSettings from "./charts/ChartSettings.svelte"

let selectedChart

const addChart = () => {
  const newChart = defaultSettings("Pie", $store.charts.length)
  store.addChart(newChart)
  selectedChart = newChart
}

const selectChart = chart => () => {
  if (selectedChart !== chart) {
    selectedChart = chart
  }
}

</script>

<button class="pure-button">Transform Dashboard Data</button>
<button class="pure-button" on:click={addChart}>Add Chart</button>

<h2>Charts</h2>
{#each $store.charts as chart}
<div class="chart-row">
  {#if selectedChart && selectedChart.id === chart.id}
  <ChartSettings chart={selectedChart} on:change={() => store.chartChanged(chart)} />
  {:else}
  <div class="chart-title" on:click={selectChart(chart)}>{chart.title}</div>
  {/if}
</div>
{/each}

<style>

.chart-row {
  border-style: solid;
  border-width: 1px 0 0 0;
  border-color: var(--grey-4);
  padding: 5px 5px 5px 10px;
}

.chart-title {
  padding: 5px 0;
}

.chart-title:hover {
  cursor: pointer;
  color: var(--blue);
}

</style>