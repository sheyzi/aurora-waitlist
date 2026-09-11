<script lang="ts">
	import WaitlistForm from './WaitlistForm.svelte';

	interface Props {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		pad: (n: number) => string;
	}

	let { days, hours, minutes, seconds, pad }: Props = $props();
</script>

<!-- SECTION 03: LUXURY WAITLIST INVITATION -->
<section
	id="waitlist"
	class="relative z-10 w-full overflow-hidden border-t border-neutral-200/80 bg-[var(--color-background)] px-4 py-24 sm:px-8 sm:py-36"
>
	<!-- Warm Ambient Backlight Glow -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-125 w-180 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(254,243,199,0.45)_0%,rgba(255,247,237,0.3)_45%,transparent_75%)]"
	></div>

	<div class="relative mx-auto max-w-3xl lg:max-w-4xl">
		<!-- Frosted Luxury Pavilion -->
		<div
			class="rounded-3xl border border-neutral-200/90 bg-white/90 p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:p-14 lg:p-16"
		>
			<p class="mb-3 font-mono text-xs tracking-widest text-neutral-400 uppercase">
				Founding cohort · opens in
			</p>
			<h2
				class="text-3xl leading-[1.08] font-bold tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl"
			>
				Your first trip is 60 seconds away.
				<span
					class="mt-2 block font-display text-[0.9em] leading-[1.12] font-normal tracking-[-0.01em] text-neutral-600 italic sm:mt-3"
				>
					Santorini took 52.1s.
				</span>
			</h2>

			<p
				class="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg"
			>
				Join the waitlist to shape yours around how you want to feel.
			</p>

			<!-- Horological Countdown Units -->
			<div
				role="timer"
				aria-label="Founding cohort opens in {days} days, {hours} hours, {minutes} minutes"
				aria-live="off"
				class="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3.5"
			>
				<div
					class="flex min-w-16 flex-col items-center rounded-xl border border-neutral-200/70 bg-neutral-50/90 px-3 py-2 shadow-2xs sm:min-w-19 sm:px-4.5 sm:py-3"
				>
					<span class="font-mono text-xl font-bold text-neutral-950 tabular-nums sm:text-2xl">
						{days}
					</span>
					<span
						class="mt-0.5 font-mono text-[9px] tracking-widest text-neutral-400 uppercase sm:text-[10px]"
					>
						Days
					</span>
				</div>

				<span class="font-mono text-sm font-bold text-neutral-300 sm:text-base" aria-hidden="true"
					>:</span
				>

				<div
					class="flex min-w-16 flex-col items-center rounded-xl border border-neutral-200/70 bg-neutral-50/90 px-3 py-2 shadow-2xs sm:min-w-19 sm:px-4.5 sm:py-3"
				>
					<span class="font-mono text-xl font-bold text-neutral-950 tabular-nums sm:text-2xl">
						{pad(hours)}
					</span>
					<span
						class="mt-0.5 font-mono text-[9px] tracking-widest text-neutral-400 uppercase sm:text-[10px]"
					>
						Hours
					</span>
				</div>

				<span class="font-mono text-sm font-bold text-neutral-300 sm:text-base" aria-hidden="true"
					>:</span
				>

				<div
					class="flex min-w-16 flex-col items-center rounded-xl border border-neutral-200/70 bg-neutral-50/90 px-3 py-2 shadow-2xs sm:min-w-19 sm:px-4.5 sm:py-3"
				>
					<span class="font-mono text-xl font-bold text-neutral-950 tabular-nums sm:text-2xl">
						{pad(minutes)}
					</span>
					<span
						class="mt-0.5 font-mono text-[9px] tracking-widest text-neutral-400 uppercase sm:text-[10px]"
					>
						Mins
					</span>
				</div>

				<span class="font-mono text-sm font-bold text-neutral-300 sm:text-base" aria-hidden="true"
					>:</span
				>

				<div
					class="flex min-w-16 flex-col items-center rounded-xl border border-neutral-200/70 bg-neutral-50/90 px-3 py-2 shadow-2xs sm:min-w-19 sm:px-4.5 sm:py-3"
				>
					<span
						class="font-mono text-xl font-bold text-neutral-950 tabular-nums sm:text-2xl"
						aria-hidden="true"
					>
						{pad(seconds)}
					</span>
					<span
						class="mt-0.5 font-mono text-[9px] tracking-widest text-neutral-400 uppercase sm:text-[10px]"
					>
						Secs
					</span>
				</div>
			</div>

			<!-- Direct Functional Email Form -->
			<div class="mx-auto mt-8 w-full max-w-md sm:mt-10">
				<WaitlistForm
					inputId="waitlist-email"
					variant="cta"
					placeholder="Enter your email address"
					buttonText="Join the waitlist"
				/>
			</div>
		</div>
	</div>
</section>
