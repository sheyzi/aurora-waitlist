<script lang="ts">
	interface Props {
		onScrollToTop: () => void;
	}

	let { onScrollToTop }: Props = $props();
</script>

<!-- STUDIO FOOTER -->
<footer
	aria-label="Studio footer"
	class="relative z-10 w-full border-t border-neutral-200/60 bg-[var(--color-background)] px-6 py-10 sm:px-12 sm:py-12"
>
	<div class="mx-auto flex max-w-7xl flex-col gap-6">
		<div class="flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-start">
			<div class="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
				<div class="flex items-center gap-2.5">
					<span class="h-1.5 w-1.5 rounded-full bg-neutral-950" aria-hidden="true"></span>
					<span class="font-sans text-sm font-bold tracking-tight text-neutral-950">AURORA</span>
				</div>
				<p class="max-w-xs font-sans text-xs leading-relaxed text-neutral-500">
					Bespoke travel, described not planned.
				</p>
			</div>

			<div class="flex flex-col items-center gap-2 sm:items-end">
				<a
					href="mailto:hello@aurora.example"
					class="font-sans text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-950"
				>
					hello@aurora.example
				</a>
				<p
					class="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-neutral-400 uppercase"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
					Founding cohort opening soon
				</p>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-between gap-4 border-t border-neutral-200/60 pt-6 font-sans text-xs text-neutral-500 sm:flex-row"
		>
			<div class="flex items-center gap-2.5">
				<span class="font-bold tracking-tight text-neutral-950">AURORA</span>
				<span class="text-neutral-300" aria-hidden="true">&bull;</span>
				<span class="text-neutral-400">&copy; {new Date().getFullYear()}</span>
				<span class="text-neutral-300" aria-hidden="true">&bull;</span>
				<span class="text-neutral-400">Fictional concept</span>
			</div>

			<div>
				<button
					onclick={onScrollToTop}
					class="flex cursor-pointer items-center gap-1.5 font-medium text-neutral-500 transition-colors hover:text-neutral-950"
				>
					<span>Back to top</span>
					<span class="font-mono text-[11px]">&uarr;</span>
				</button>
			</div>
		</div>
	</div>
</footer>
