<script lang="ts">
	interface Props {
		isScrolled: boolean;
		compact: boolean;
		onScrollToSection: (id: string) => void;
		onFocusWaitlist: () => void;
	}

	let { isScrolled, compact, onScrollToSection, onFocusWaitlist }: Props = $props();
</script>

<!-- Full Navbar — crossfades out past the hero (inner pill only; header keeps GSAP entrance) -->
<header
	class="site-nav opacity-0 fixed inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none top-[max(0.75rem,env(safe-area-inset-top))] sm:top-[max(1rem,env(safe-area-inset-top))]"
>
	<div
		inert={compact ? true : undefined}
		class="pointer-events-auto flex items-center justify-between gap-2 w-full max-w-3xl pl-3 pr-2 sm:pl-4 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-all duration-300 {compact
			? 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none'
			: 'opacity-100 translate-y-0 scale-100'} {isScrolled
			? 'bg-[#FFFDF9]/95 backdrop-blur-md border border-stone-300/90 shadow-[0_12px_32px_-8px_rgba(45,38,30,0.18),0_2px_8px_-2px_rgba(45,38,30,0.08)]'
			: 'bg-[#FFFDF9]/85 backdrop-blur-[2px] border border-stone-200/80 shadow-[0_4px_16px_-3px_rgba(45,38,30,0.06)]'}"
	>
		<!-- Brand: folio dossier mark -->
		<a href="/" class="flex items-center gap-2 group pl-1 shrink-0" aria-label="Aurora home">
			<span class="relative flex items-center justify-center">
				<span
					class="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#FDE89D] via-[#CB9A4E] to-[#6A461A] border border-[#9E7330]/70 shadow-[0_1px_3px_rgba(40,30,20,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center"
				>
					<span class="h-1 w-1 rounded-full bg-white/85"></span>
				</span>
			</span>
			<span
				class="font-sans font-bold tracking-tight text-neutral-950 text-xs sm:text-sm group-hover:opacity-75 transition-opacity"
				>AURORA</span
			>
		</a>

		<!-- Center Navigation Links -->
		<nav
			class="hidden sm:flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-stone-500"
		>
			<a
				href="#sample-trips"
				onclick={(e) => {
					e.preventDefault();
					onScrollToSection('sample-trips');
				}}
				class="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors"
			>
				Sample Trips
			</a>
			<a
				href="#how-it-works"
				onclick={(e) => {
					e.preventDefault();
					onScrollToSection('how-it-works');
				}}
				class="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors"
			>
				How It Works
			</a>
		</nav>

		<!-- Right Action: ticket-stub CTA -->
		<div class="flex items-center shrink-0">
			<button
				onclick={onFocusWaitlist}
				class="group bg-neutral-950 hover:bg-neutral-800 text-white text-[11.5px] sm:text-xs font-sans font-medium tracking-normal pl-3.5 sm:pl-4 pr-2 py-1 sm:py-1 rounded-full cursor-pointer shadow-2xs hover:shadow-xs active:scale-[0.98] flex items-center gap-2 transition-all"
			>
				<span class="pl-0.5">Join Waitlist</span>
				<span class="flex items-center justify-center h-6 w-6 rounded-full bg-white/15 group-hover:bg-white/20 transition-colors font-mono text-[11px] text-white">&rarr;</span>
			</button>
		</div>
	</div>
</header>

<!-- Compact CTA bubble — crossfades in past the hero, parked top-right -->
<div
	class="fixed z-40 right-3 sm:right-6 top-[max(0.75rem,env(safe-area-inset-top))] sm:top-[max(1rem,env(safe-area-inset-top))] transition-all duration-300 {compact
		? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
		: 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none'}"
	inert={compact ? undefined : true}
>
	<button
		onclick={onFocusWaitlist}
		tabindex={compact ? 0 : -1}
		class="group bg-neutral-950/95 backdrop-blur-md hover:bg-neutral-800 border border-white/10 text-white text-[11.5px] sm:text-xs font-sans font-medium tracking-normal pl-3.5 sm:pl-4 pr-2 py-1.5 sm:py-2 rounded-full cursor-pointer shadow-[0_12px_32px_-8px_rgba(45,38,30,0.35)] hover:shadow-xs active:scale-[0.98] flex items-center gap-2 transition-all"
	>
		<span class="pl-0.5">Join Waitlist</span>
		<span class="flex items-center justify-center h-6 w-6 rounded-full bg-white/15 group-hover:bg-white/20 transition-colors font-mono text-[11px] text-white">&rarr;</span>
	</button>
</div>
