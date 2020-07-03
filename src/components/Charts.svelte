<script>
import Chart from "./charts/Chart.svelte"
import store from "../store"

</script>

{#each $store.charts as chart}
<Chart {chart} data={$store.data} />
{/each}

<style>

</style>