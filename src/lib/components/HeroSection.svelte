<script lang="ts">
	import type { FolioPlate } from '$lib/utils';
	import WaitlistForm from './WaitlistForm.svelte';

	interface Props {
		folio: FolioPlate[];
	}

	let { folio }: Props = $props();

	const left = $derived(folio[0]);
	const right = $derived(folio[1]);
</script>

<!-- HERO SECTION: Travel Folio Spread — 2 plates + center dossier -->
<section
	id="hero-header"
	class="hero-viewport sticky top-0 z-0 flex w-full items-center justify-center overflow-hidden bg-transparent pt-24 pb-10 sm:pt-28"
>
	<!-- Soft Warm Center Ambiance -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 z-0 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(254,243,199,0.25)_0%,transparent_70%)] sm:h-120 sm:w-140"
	></div>

	<div
		class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)_280px] lg:gap-10 xl:max-w-7xl xl:grid-cols-[320px_minmax(0,1fr)_320px] xl:gap-14 2xl:max-w-[1440px] 2xl:grid-cols-[340px_minmax(0,1fr)_340px] 2xl:gap-20"
	>
		<!-- LEFT PLATE (desktop) -->
		{#if left}
			<figure
				class="folio-plate-left relative hidden w-full max-w-[300px] justify-self-center opacity-0 lg:block xl:max-w-[320px] 2xl:max-w-[340px]"
			>
				<div
					class="relative -rotate-6 rounded-xl border border-stone-200/90 bg-[#FFFDF9] p-2 pb-3 shadow-[0_20px_50px_-12px_rgba(45,38,30,0.25),0_4px_12px_-2px_rgba(45,38,30,0.1)]"
				>
					<!-- Washi tape -->
					<div
						class="card-fastener pointer-events-none absolute -top-2.5 left-1/2 z-30 h-4 w-16 -translate-x-1/2 rotate-[-3deg] rounded-[1px] border-y border-amber-900/10 bg-amber-100/75 shadow-[0_1px_2px_rgba(40,30,20,0.1)] backdrop-blur-[1px]"
					></div>
					<div class="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100">
						<img
							src={left.src}
							alt="{left.title}, {left.region}"
							class="h-full w-full object-cover"
							loading="eager"
							decoding="async"
						/>
						<div
							class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
						></div>
						<span
							class="absolute top-2.5 left-2.5 rounded-sm border border-white/15 bg-black/45 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-white/90 uppercase backdrop-blur-sm"
						>
							{left.region}
						</span>
					</div>
					<div
						class="mt-2 flex items-center justify-center px-1 font-mono text-[9px] tracking-wider uppercase"
					>
						<span class="font-semibold text-stone-700">{left.title}</span>
					</div>
				</div>
			</figure>
		{/if}

		<!-- CENTER -->
		<div
			class="center-hero relative z-20 mx-auto flex w-full max-w-xl flex-col items-center px-2 opacity-0 sm:px-6 xl:max-w-2xl"
		>
			<div class="center-hero-content flex w-full flex-col items-center text-center">
				<!-- Mobile mini folio strip: 2 small plates with tape + pin -->
				{#if left && right}
					<div class="mb-5 flex items-start justify-center gap-3 lg:hidden">
						<div
							class="folio-mini-left relative w-24 -rotate-6 rounded-lg border border-stone-200/90 bg-[#FFFDF9] p-1 pb-2 shadow-[0_10px_25px_-8px_rgba(45,38,30,0.25)] sm:w-28"
						>
							<!-- Mini washi tape -->
							<div
								class="card-fastener pointer-events-none absolute -top-1.5 left-1/2 z-30 h-2 w-8 -translate-x-1/2 rotate-[-3deg] rounded-[1px] border-y border-amber-900/10 bg-amber-100/75 shadow-[0_1px_2px_rgba(40,30,20,0.1)] backdrop-blur-[1px]"
							></div>
							<div class="aspect-[3/4] overflow-hidden rounded-md bg-stone-100">
								<img
									src={left.src}
									alt="{left.title}, {left.region}"
									class="h-full w-full object-cover"
									loading="eager"
									decoding="async"
								/>
							</div>
							<p
								class="mt-1 truncate text-center font-mono text-[7.5px] tracking-wider text-stone-500 uppercase"
							>
								{left.title}
							</p>
						</div>
						<div
							class="folio-mini-right relative mt-3 w-24 rotate-6 rounded-lg border border-stone-200/90 bg-[#FFFDF9] p-1 pb-2 shadow-[0_10px_25px_-8px_rgba(45,38,30,0.25)] sm:w-28"
						>
							<!-- Mini brass pin -->
							<div
								class="card-fastener pointer-events-none absolute -top-1.5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center select-none"
							>
								<div
									class="absolute top-1.5 h-px w-1.5 rounded-full bg-stone-900/40 blur-[0.5px]"
								></div>
								<div
									class="relative flex h-3 w-3 items-center justify-center rounded-full border border-[#9E7330]/70 bg-gradient-to-br from-[#FDE89D] via-[#CB9A4E] to-[#6A461A] shadow-[0_2px_4px_rgba(40,30,20,0.4),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(0,0,0,0.45)]"
								>
									<div
										class="h-0.5 w-0.5 -translate-x-px -translate-y-px rounded-full bg-white/85"
									></div>
								</div>
							</div>
							<div class="aspect-[3/4] overflow-hidden rounded-md bg-stone-100">
								<img
									src={right.src}
									alt="{right.title}, {right.region}"
									class="h-full w-full object-cover"
									loading="eager"
									decoding="async"
								/>
							</div>
							<p
								class="mt-1 truncate text-center font-mono text-[7.5px] tracking-wider text-stone-500 uppercase"
							>
								{right.title}
							</p>
						</div>
					</div>
				{/if}

				<h1
					class="font-sans text-[34px] leading-[1.05] tracking-[-0.035em] text-balance text-neutral-950 sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[68px]"
				>
					<span class="block font-bold">Stop planning trips.</span>
					<span
						class="mt-1 block font-display text-[0.82em] leading-[1.1] font-normal tracking-[-0.01em] text-neutral-600 italic"
						>Start describing them.</span
					>
				</h1>

				<p
					class="mt-3 max-w-[440px] px-2 font-sans text-[15px] leading-relaxed font-normal tracking-[-0.01em] text-balance text-neutral-600 sm:mt-4 sm:px-0 sm:text-[17px]"
				>
					Send a 30-sec voice note. Aurora builds your flights, stays, and daily plan in 60 seconds.
				</p>

				<!-- Frosted Waitlist Form -->
				<div class="hero-form-wrapper mt-6 w-full max-w-md px-1 sm:mt-8 sm:px-0">
					<WaitlistForm
						inputId="hero-email"
						variant="hero"
						placeholder="Enter your email"
						buttonText="Join Waitlist"
					/>
				</div>

				<!-- Scroll Prompt -->
				<div
					class="scroll-prompt mt-7 flex items-center gap-2 font-sans text-[10.5px] font-medium tracking-[0.14em] text-neutral-400 uppercase sm:mt-10 sm:text-[11px]"
				>
					<span>Scroll to explore</span>
					<span class="inline-block animate-bounce">&darr;</span>
				</div>
			</div>
		</div>

		<!-- RIGHT PLATE (desktop) -->
		{#if right}
			<figure
				class="folio-plate-right relative hidden w-full max-w-[300px] justify-self-center opacity-0 lg:block xl:max-w-[320px] 2xl:max-w-[340px]"
			>
				<div
					class="relative rotate-5 rounded-xl border border-stone-200/90 bg-[#FFFDF9] p-2 pb-3 shadow-[0_20px_50px_-12px_rgba(45,38,30,0.25),0_4px_12px_-2px_rgba(45,38,30,0.1)]"
				>
					<!-- Brass pin -->
					<div
						class="card-fastener pointer-events-none absolute -top-2.5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center select-none"
					>
						<div class="absolute top-2.5 h-0.5 w-2 rounded-full bg-stone-900/40 blur-[0.5px]"></div>
						<div
							class="relative flex h-4 w-4 items-center justify-center rounded-full border border-[#9E7330]/70 bg-gradient-to-br from-[#FDE89D] via-[#CB9A4E] to-[#6A461A] shadow-[0_2px_4px_rgba(40,30,20,0.4),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(0,0,0,0.45)]"
						>
							<div class="h-1 w-1 -translate-x-0.5 -translate-y-0.5 rounded-full bg-white/85"></div>
						</div>
					</div>
					<div class="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100">
						<img
							src={right.src}
							alt="{right.title}, {right.region}"
							class="h-full w-full object-cover"
							loading="eager"
							decoding="async"
						/>
						<div
							class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
						></div>
						<span
							class="absolute top-2.5 left-2.5 rounded-sm border border-white/15 bg-black/45 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-white/90 uppercase backdrop-blur-sm"
						>
							{right.region}
						</span>
					</div>
					<div
						class="mt-2 flex items-center justify-center px-1 font-mono text-[9px] tracking-wider uppercase"
					>
						<span class="font-semibold text-stone-700">{right.title}</span>
					</div>
				</div>
			</figure>
		{/if}
	</div>
</section>
