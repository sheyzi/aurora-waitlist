<script lang="ts">
	import { STACK_TRIPS } from '$lib/data/trips';
	import TripCard from './TripCard.svelte';
</script>

<!-- SECTION 01: SAMPLE TRIPS — JOURNEY CHAPTERS -->
<!-- No section header: chapter 01's index, title and voice note open the story directly -->
<section
	id="sample-trips"
	class="relative z-10 w-full bg-transparent px-4 pt-16 pb-32 sm:px-8 sm:pt-24 sm:pb-36"
>
	<div class="mx-auto max-w-7xl px-2 sm:px-6">
		<!-- CHAPTER FLOW -->
		<div class="w-full space-y-20 sm:space-y-28">
			{#each STACK_TRIPS as trip, tripIndex (trip.id)}
				<TripCard {trip} {tripIndex} />
			{/each}
		</div>
	</div>
</section>
