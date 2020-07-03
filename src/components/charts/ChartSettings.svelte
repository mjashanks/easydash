<script>
import PieSettings from "./pie/PieSettings.svelte"
import BarSettings from "./bar/BarSettings.svelte"
import store from "../../store"

export let chart

const settingsComponentMap = {
  Pie: PieSettings,
  Bar: BarSettings,
}

$: settingsComponent = chart.type && settingsComponentMap[chart.type]

</script>

<form class="pure-form pure-form-stacked">
  <fieldset>
    <label for="chart-title">Title</label>
    <input id="chart-title" type="text" placeholder="Title" bind:value={chart.title} on:change />
    <label for="chart-type">Type</label>
    <select id="chart-type" bind:value={chart.type} on:blur>
      <option>Pie</option>
      <option>Bar</option>
    </select>
    <label for="checkbox-radio-option-one" class="pure-checkbox">
      <input type="checkbox" id="checkbox-radio-option-one" bind:value={chart.visible} on:change/>Visible
    </label>
    <svelte:component this={settingsComponent} {chart} on:change fields={$store.fields} />
  </fieldset>
</form>

<style>

</style>