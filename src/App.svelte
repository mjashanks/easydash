<script>
import store from "./store"
import NoData from "./components/NoData.svelte"
import Dashboard from "./components/Dashboard.svelte"

</script>

<main>
	{#if $store.data}
	<Dashboard />
	{:else}
	<NoData />
	{/if}
</main>

<style>
	main {
		margin: 0 auto;
		box-sizing: border-box;
		height: 100%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

</style>