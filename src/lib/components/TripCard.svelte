<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type { Trip } from '$lib/types';
	import { markTripManual, registerTripDaySetter } from '$lib/tripSpy';

	interface Props {
		trip: Trip;
		tripIndex: number;
	}

	let { trip, tripIndex }: Props = $props();

	let activeDayIndex = $state(0);
	let activeDay = $derived(trip.days[activeDayIndex] || trip.days[0]);

	const reduceMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const dissolveMs = reduceMotion ? 0 : 450;

	function jumpToDay(idx: number) {
		if (idx === activeDayIndex) return;
		if (idx < 0 || idx >= trip.days.length) return;
		markTripManual();
		activeDayIndex = idx;
		if (typeof document === 'undefined') return;
		const el = document.querySelector(`.trip-day-block[data-trip="${trip.id}"][data-day="${idx}"]`);
		if (el) {
			el.scrollIntoView(
				reduceMotion ? { block: 'center' } : { behavior: 'smooth', block: 'center' }
			);
		}
	}

	// Preload neighboring days so dissolves land on decoded bitmaps, not blanks
	$effect(() => {
		const idx = activeDayIndex;
		if (typeof window === 'undefined') return;
		for (const n of [idx - 1, idx + 1]) {
			const photo = trip.days[n]?.photo;
			if (photo) {
				const img = new Image();
				img.decoding = 'async';
				img.src = photo;
			}
		}
	});

	onMount(() => registerTripDaySetter(trip.id, (i) => (activeDayIndex = i)));
</script>

<!-- TRIP CHAPTER: voice prologue → sticky photo + scrolling days → quiet logistics -->
<article
	class="trip-chapter reveal-on-scroll w-full translate-y-6 opacity-0"
	data-trip={trip.id}
	data-trip-index={tripIndex}
>
	<!-- Chapter title card -->
	<div class="text-center">
		<h3
			class="text-3xl leading-[1.05] font-bold tracking-[-0.035em] text-balance text-neutral-950 sm:text-5xl"
		>
			{trip.title}
		</h3>

		<!-- The brief: what the traveler actually said -->
		<figure class="mx-auto mt-5 max-w-3xl">
			<blockquote
				class="font-display text-[21px] leading-[1.42] text-balance text-neutral-600 italic sm:text-[26px]"
			>
				“{trip.voicePrompt}”
			</blockquote>
		</figure>
	</div>

	<!-- Day explorer: sticky photo + scrolling day blocks -->
	<div class="mt-12 grid grid-cols-1 items-start gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-8">
		<!-- Sticky photo plate: vertically centered beside the notes, under navbar on mobile -->
		<div
			class="sticky top-[84px] z-10 self-start overflow-hidden rounded-2xl border border-stone-200/90 bg-[#FFFDF9] p-2 pb-3 shadow-[0_20px_50px_-16px_rgba(45,38,30,0.28)] sm:rounded-3xl sm:p-2.5 lg:top-[max(7rem,calc((100lvh-600px)/2))] lg:col-span-7"
		>
			<div
				class="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100 sm:rounded-2xl lg:aspect-auto lg:h-[540px]"
			>
				{#key activeDay.photo}
					<!-- Dissolve layer: outgoing lingers underneath while incoming fades over -->
					<div
						class="absolute inset-0"
						in:fade={{ duration: dissolveMs }}
						out:fade={{ duration: dissolveMs }}
					>
						<img
							src={activeDay.photo}
							alt="{activeDay.photoCaption}, {trip.title}"
							class="photo-settle absolute inset-0 h-full w-full object-cover"
							loading="lazy"
							decoding="async"
						/>
						<div
							class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
						></div>
						<div
							class="absolute inset-0"
							in:fly={{
								y: reduceMotion ? 0 : 4,
								duration: reduceMotion ? 0 : 300,
								delay: reduceMotion ? 0 : 80
							}}
						>
							<span
								class="absolute top-3 left-3 rounded-sm border border-white/15 bg-black/45 px-2 py-0.5 font-mono text-[9.5px] font-semibold tracking-wider text-white/90 uppercase backdrop-blur-sm"
							>
								{activeDay.photoLocation}
							</span>
							<p
								class="absolute inset-x-3 bottom-3 font-sans text-sm leading-tight font-bold text-white sm:inset-x-4 sm:text-base"
							>
								{activeDay.photoCaption}
							</p>
						</div>
					</div>
				{/key}
			</div>
			<!-- Day navigation: dots/tabs + counter, wired to scroll-spy lockout -->
			<div class="flex items-center justify-between gap-3 px-1 pt-2.5 sm:px-1.5">
				<div role="tablist" aria-label="{trip.title} days" class="flex items-center gap-1.5">
					{#each trip.days as day, idx (day.dayLabel)}
						<button
							type="button"
							role="tab"
							aria-selected={idx === activeDayIndex}
							aria-label="Go to day {idx + 1}: {day.title}"
							onclick={() => jumpToDay(idx)}
							class="cursor-pointer rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors {idx ===
							activeDayIndex
								? 'border-neutral-950 bg-neutral-950 text-white'
								: 'border-stone-200 bg-transparent text-stone-500 hover:border-stone-400 hover:text-stone-900'}"
						>
							0{idx + 1}
						</button>
					{/each}
				</div>
				<p class="font-mono text-[11px] text-stone-500 tabular-nums" aria-live="polite">
					0{activeDayIndex + 1} / 0{trip.days.length}
				</p>
			</div>
		</div>

		<!-- Scrolling day blocks (scroll-spy drives the photo, tabs jump to blocks) -->
		<div class="flex flex-col lg:col-span-5">
			{#each trip.days as day, idx (day.dayLabel)}
				<div
					class="trip-day-block flex min-h-[70vh] flex-col justify-center py-8"
					data-trip={trip.id}
					data-day={idx}
					aria-current={idx === activeDayIndex ? 'true' : undefined}
				>
					<div class="flex items-center justify-between gap-2">
						<p class="font-mono text-[11px] tracking-[0.18em] text-stone-400 uppercase">
							Day 0{idx + 1} · {day.time}
						</p>
						{#if idx === activeDayIndex}
							<span
								class="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-emerald-700 uppercase"
							>
								<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
								Viewing
							</span>
						{/if}
					</div>
					<div class="mt-2 flex items-baseline justify-between gap-2">
						<h4
							class="font-sans text-lg font-bold tracking-tight text-balance text-stone-950 sm:text-xl"
						>
							{day.title}
						</h4>
					</div>
					<p class="mt-2 font-sans text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
						{day.lead}
					</p>

					<ul
						class="mt-5 space-y-3.5 border-l pl-5 transition-colors {idx === activeDayIndex
							? 'border-neutral-900'
							: 'border-stone-200'}"
					>
						{#each day.events as ev, i (i)}
							<li class="flex items-baseline gap-3 text-sm">
								<span class="w-14 shrink-0 font-mono text-[11px] font-semibold text-stone-400">
									{ev.time}
								</span>
								<span class="font-sans leading-snug text-stone-800">
									{ev.text}
								</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</article>
