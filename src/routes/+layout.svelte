<script lang="ts">
	import './layout.css';
	import 'lenis/dist/lenis.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Stop planning trips — Aurora</title>
	<meta
		name="description"
		content="Aurora turns a 30-second voice note into flights, a stay, and a day-by-day trip plan. Join the waitlist."
	/>
</svelte:head>
{@render children()}
