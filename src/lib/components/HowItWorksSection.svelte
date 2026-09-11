<script lang="ts">
	import { HOW_IT_WORKS_EXAMPLE as ex } from '$lib/data/howItWorks';

	interface Props {
		onFocusWaitlist: () => void;
		onBrowseTrips?: () => void;
	}

	let { onFocusWaitlist, onBrowseTrips }: Props = $props();

	// Simulated specimen playback — advances the filled bars, no audio assets.
	let playing = $state(false);
	let filled = $state(14);
	let timer: number | null = null;

	const reduceMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function stopPreview() {
		playing = false;
		if (timer !== null) {
			window.clearInterval(timer);
			timer = null;
		}
	}

	function togglePreview() {
		if (playing) {
			stopPreview();
			return;
		}
		if (reduceMotion) {
			playing = false;
			filled = ex.waveform.length;
			return;
		}
		playing = true;
		timer = window.setInterval(() => {
			filled += 1;
			if (filled >= ex.waveform.length) {
				filled = ex.waveform.length;
				stopPreview();
			}
		}, 320);
	}

	$effect(() => {
		return () => {
			if (timer !== null) window.clearInterval(timer);
		};
	});
</script>

<!-- SECTION 02: HOW IT WORKS (Minimalist Editorial Process) -->
<section
	id="how-it-works"
	class="relative z-10 w-full border-t border-neutral-200/80 bg-[#F6F6F4] px-6 py-24 sm:px-12 sm:py-32"
>
	<div class="mx-auto max-w-6xl">
		<!-- Section Header -->
		<div class="reveal-on-scroll max-w-3xl translate-y-6 opacity-0">
			<p class="mb-3 font-mono text-xs tracking-widest text-neutral-400 uppercase">How it works</p>
			<h2
				class="text-3xl leading-[1.1] font-bold tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-[52px]"
			>
				From a quick voice note
				<span
					class="mt-1 block font-display text-[0.9em] leading-[1.12] font-normal tracking-[-0.01em] text-neutral-600 italic sm:mt-2"
				>
					to a tailored, bookable itinerary.
				</span>
			</h2>

			<p
				class="mt-4 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg"
			>
				No forty open browser tabs, no generic top-ten lists. Just speak naturally, and Aurora
				builds a seamless day-by-day journey tailored to how you actually travel.
			</p>

			<!-- Live-example bridge: same Santorini brief as the chapters above -->
			<p
				class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-neutral-500"
			>
				<span class="rounded-full bg-neutral-950 px-2 py-0.5 font-medium text-white">
					Live example · {ex.tripTitle}
				</span>
				<span>Built in {ex.latency}</span>
				{#if onBrowseTrips}
					<button
						type="button"
						onclick={onBrowseTrips}
						class="cursor-pointer underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-800"
					>
						See this trip live above &uarr;
					</button>
				{:else}
					<a
						href="#sample-trips"
						class="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-800"
					>
						See this trip live above &uarr;
					</a>
				{/if}
			</p>
		</div>

		<!-- Step connector (desktop only) -->
		<div aria-hidden="true" class="mt-12 hidden items-center gap-4 text-neutral-300 lg:flex">
			<span class="font-mono text-[11px] text-neutral-400">01</span>
			<span class="h-px flex-1 bg-neutral-200"></span>
			<span class="font-mono text-[11px] text-neutral-400">02</span>
			<span class="h-px flex-1 bg-neutral-200"></span>
			<span class="font-mono text-[11px] text-neutral-400">03</span>
		</div>

		<!-- The 3 Minimalist Editorial Cards -->
		<div class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-3">
			<!-- CARD 01: You speak -->
			<div
				class="reveal-on-scroll flex translate-y-6 flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8"
			>
				<div>
					<div class="flex items-center justify-between border-b border-neutral-100 pb-4">
						<span class="font-mono text-xs font-medium text-neutral-400">01</span>
						<span
							class="font-mono text-[11px] font-medium tracking-wider text-neutral-500 uppercase"
							>The Brief</span
						>
					</div>

					<h3 class="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-950">
						Tell us what you're craving
					</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
						Drop a voice memo or type a loose idea. Mention dates, who you're with, or just the
						feeling you want.
					</p>

					<!-- Voice Note Specimen Player -->
					<div class="mt-6 rounded-xl border border-neutral-200/70 bg-neutral-50/70 p-4">
						<div class="flex items-center gap-3">
							<button
								type="button"
								onclick={togglePreview}
								aria-label={playing ? 'Pause sample brief' : 'Play sample brief'}
								aria-pressed={playing}
								class="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-950 text-white shadow-xs transition-colors hover:bg-neutral-800"
							>
								{#if playing}
									<svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M7 5h4v14H7zM13 5h4v14h-4z" />
									</svg>
								{:else}
									<svg
										class="ml-0.5 h-3.5 w-3.5 fill-current"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8 5v14l11-7z" />
									</svg>
								{/if}
							</button>
							<div class="flex-1">
								<div
									class="mb-1.5 flex items-center justify-between font-mono text-[11px] text-neutral-500"
								>
									<span class="font-medium text-neutral-800">Voice Note · {ex.tripTitle}</span>
									<span>{playing ? 'Playing' : ex.voiceDuration}</span>
								</div>
								<!-- Realistic Waveform Bars -->
								<div class="flex h-5 items-center gap-0.75" aria-hidden="true">
									{#each ex.waveform as height, i (i)}
										<span
											class="w-1 rounded-full transition-colors {i < filled
												? 'bg-neutral-950'
												: 'bg-neutral-300'}"
											style="height: {height}%;"
										></span>
									{/each}
								</div>
							</div>
						</div>

						<p
							class="mt-4 border-t border-neutral-200/60 pt-3 font-sans text-xs leading-relaxed font-medium text-neutral-700"
						>
							“{ex.voiceQuote}”
						</p>
					</div>
				</div>

				<!-- Extracted Vibe Badges -->
				<div class="mt-6 border-t border-neutral-100 pt-4">
					<p class="mb-2 font-mono text-[10px] font-medium text-neutral-400 uppercase">
						Captured intent:
					</p>
					<div class="flex flex-wrap gap-1.5">
						{#each ex.badges as badge (badge)}
							<span
								class="rounded-md bg-neutral-100 px-2.5 py-0.5 font-sans text-xs font-medium text-neutral-800"
							>
								{badge}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- CARD 02: Aurora curates -->
			<div
				class="reveal-on-scroll flex translate-y-6 flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8"
			>
				<div>
					<div class="flex items-center justify-between border-b border-neutral-100 pb-4">
						<span class="font-mono text-xs font-medium text-neutral-400">02</span>
						<span
							class="font-mono text-[11px] font-medium tracking-wider text-neutral-500 uppercase"
							>The Curation</span
						>
					</div>

					<h3 class="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-950">
						Every hour thoughtfully shaped
					</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
						Aurora pairs intimate boutique sanctuaries with local knowledge, timing each day around
						golden light and crowd rhythms.
					</p>

					<!-- Curated Sanctuary & Route Preview -->
					<div class="mt-6 space-y-3">
						<!-- Boutique Stay Card -->
						<div class="rounded-xl border border-neutral-200/70 bg-neutral-50/70 p-3.5">
							<div class="flex items-center justify-between font-mono text-[10.5px]">
								<span class="tracking-wider text-neutral-500 uppercase">Matched Sanctuary</span>
								<span class="font-sans font-medium text-emerald-700"
									>Verified · {ex.stayRating}</span
								>
							</div>
							<p class="mt-1 font-sans text-xs font-semibold text-neutral-950">
								{ex.stayName}
							</p>
							<p class="mt-0.5 text-[11.5px] text-neutral-600">
								{ex.stayType}
							</p>
						</div>

						<!-- Smart Pacing Logic Card -->
						<div class="rounded-xl border border-neutral-200/70 bg-neutral-50/70 p-3.5">
							<div class="flex items-center justify-between font-mono text-[10.5px]">
								<span class="tracking-wider text-neutral-500 uppercase">Pacing & Flow</span>
								<span class="font-mono text-[10px] text-neutral-700">Golden Hour Sync</span>
							</div>
							<p class="mt-1 font-sans text-xs font-semibold text-neutral-950">
								Morning {ex.pacing.from} &rarr; Evening {ex.pacing.to}
							</p>
							<p class="mt-0.5 text-[11.5px] text-neutral-600">
								{ex.pacing.note}
							</p>
						</div>
					</div>
				</div>

				<!-- Curation Guarantee -->
				<div
					class="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-600"
				>
					<span class="font-sans">Zero tourist traps</span>
					<span class="font-mono text-[11px] text-neutral-400">Built in {ex.latency}</span>
				</div>
			</div>

			<!-- CARD 03: You go -->
			<div
				class="reveal-on-scroll flex translate-y-6 flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8"
			>
				<div>
					<div class="flex items-center justify-between border-b border-neutral-100 pb-4">
						<span class="font-mono text-xs font-medium text-neutral-400">03</span>
						<span
							class="font-mono text-[11px] font-medium tracking-wider text-neutral-500 uppercase"
							>The Journey</span
						>
					</div>

					<h3 class="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-950">
						Ready on your phone
					</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
						Direct bookings confirmed, offline maps downloaded, and your daily flow organized
						without having to manage a thing.
					</p>

					<!-- Live Itinerary Snippet -->
					<div class="mt-6 space-y-3 rounded-xl border border-neutral-200/70 bg-neutral-50/70 p-4">
						<div class="flex items-center justify-between border-b border-neutral-200/60 pb-2">
							<span class="font-mono text-[11px] font-bold text-neutral-900"
								>{ex.dayOne.label} · {ex.dayOne.title}</span
							>
							<span
								class="rounded-full bg-emerald-100/80 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700"
							>
								Ready
							</span>
						</div>

						<div class="space-y-2 pt-0.5 font-sans text-xs">
							{#each ex.dayOne.events as ev (ev.time)}
								<div class="flex items-start gap-2.5">
									<span class="mt-0.5 w-14 shrink-0 font-mono text-[10.5px] text-neutral-400"
										>{ev.time}</span
									>
									<div>
										<p class="leading-snug font-semibold text-neutral-950">{ev.text}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Direct Call to Action -->
				<div class="mt-6 border-t border-neutral-100 pt-4">
					<button
						onclick={onFocusWaitlist}
						class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-3 font-sans text-xs font-medium text-white shadow-xs transition-colors hover:bg-neutral-800"
					>
						<span>Join the waitlist</span>
						<span class="font-mono text-[11px]">&rarr;</span>
					</button>
					<p class="mt-2.5 text-center font-mono text-[10px] text-neutral-400">
						Syncs to Apple Calendar & Google Maps
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
