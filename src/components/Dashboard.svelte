<script>
import DashboardSettings from "./DashboardSettings.svelte"
import Charts from "./Charts.svelte"

</script>

<div class="root">

  <div class="charts-container">
    <Charts />
  </div>

  <div class="dashboard-settings">
    <DashboardSettings />
  </div>

</div>

<style>

.root {
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.charts-container {
  flex: 1;
  min-width: 0;
}

.dashboard-settings {
  width: 400px;
  border-style: solid;
  border-color: var(--grey-4);
  border-width: 0 0 0 1px;
  padding: 10px 5px 3px 5px;
}

</style>