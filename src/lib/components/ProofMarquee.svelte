<script lang="ts">
	import { MARQUEE_ITEMS } from '$lib/data/marquee';
</script>

<!-- PROOF MARQUEE: Architectural Press & Live Telemetry -->
<section
	id="proof-marquee"
	class="relative z-[5] w-full border-y border-neutral-300/80 bg-[#F4F4F2] py-4 sm:py-5 overflow-hidden select-none"
>
	<!-- Left & Right Vignette Fades -->
	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F4F2] to-transparent z-10"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4F4F2] to-transparent z-10"
	></div>

	<!-- Continuous Infinite Loop Marquee -->
	<div class="animate-marquee flex items-center gap-8">
		<!-- First Track -->
		<div class="flex shrink-0 items-center gap-8">
			{#each MARQUEE_ITEMS as item}
				{#if item.type === 'quote'}
					<div class="flex items-center gap-3 whitespace-nowrap">
						<span class="font-sans font-medium text-neutral-800 text-[13.5px] tracking-[-0.01em]"
							>{item.text}</span
						>
						<span
							class="font-sans font-bold text-[10.5px] uppercase tracking-wider text-neutral-950 bg-white/90 border border-neutral-200/90 px-2.5 py-0.5 rounded-full"
						>
							{item.author}
						</span>
					</div>
				{:else}
					<div
						class="flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] bg-white/70 border border-neutral-200/80 px-3 py-1 rounded-full"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
						<span class="text-neutral-500 uppercase tracking-wider">{item.label}:</span>
						<span class="text-neutral-950 font-bold tracking-tight">{item.val}</span>
					</div>
				{/if}
				<!-- Divider -->
				<span class="text-neutral-300 font-mono text-xs select-none">+</span>
			{/each}
		</div>

		<!-- Duplicate Track for Seamless Endless Loop -->
		<div class="flex shrink-0 items-center gap-8" aria-hidden="true">
			{#each MARQUEE_ITEMS as item}
				{#if item.type === 'quote'}
					<div class="flex items-center gap-3 whitespace-nowrap">
						<span class="font-sans font-medium text-neutral-800 text-[13.5px] tracking-[-0.01em]"
							>{item.text}</span
						>
						<span
							class="font-sans font-bold text-[10.5px] uppercase tracking-wider text-neutral-950 bg-white/90 border border-neutral-200/90 px-2.5 py-0.5 rounded-full"
						>
							{item.author}
						</span>
					</div>
				{:else}
					<div
						class="flex items-center gap-2.5 whitespace-nowrap font-mono text-[11px] bg-white/70 border border-neutral-200/80 px-3 py-1 rounded-full"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
						<span class="text-neutral-500 uppercase tracking-wider">{item.label}:</span>
						<span class="text-neutral-950 font-bold tracking-tight">{item.val}</span>
					</div>
				{/if}
				<!-- Divider -->
				<span class="text-neutral-300 font-mono text-xs select-none">+</span>
			{/each}
		</div>
	</div>
</section>
