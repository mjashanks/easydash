<script>
import { createEventDispatcher } from "svelte"
const dispatch = createEventDispatcher();

export let chart
export let fields

const blur = e => {
  dispatch("change", e)
}

</script>

<label for="chart-title">Group By</label>
<select id="chart-type" bind:value={chart.groupBy} on:blur={blur}>
  <option></option>
  {#each fields as field}
  <option>{field}</option>
  {/each}
</select>
