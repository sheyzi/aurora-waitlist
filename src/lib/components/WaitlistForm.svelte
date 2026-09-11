<script lang="ts">
	interface Props {
		inputId: string;
		placeholder?: string;
		buttonText?: string;
		variant?: 'hero' | 'cta';
	}

	let {
		inputId,
		placeholder = 'Enter your email',
		buttonText = 'Join Waitlist',
		variant = 'cta'
	}: Props = $props();

	let email = $state('');
	let isSubmitting = $state(false);
	let errorMessage = $state('');
	let successMessage = $state('');

	const errorId = $derived(`${inputId}-error`);
	const successId = $derived(`${inputId}-success`);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email.trim() || isSubmitting) return;

		isSubmitting = true;
		errorMessage = '';

		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: email.trim() })
			});
			const data = await res.json();
			if (res.ok && data.success) {
				successMessage = data.message || "You're on the list — check your inbox.";
			} else {
				errorMessage = data.message || 'Something went wrong. Please try again.';
			}
		} catch {
			errorMessage = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	}

	const isHero = $derived(variant === 'hero');
</script>

{#if successMessage}
	<div
		id={successId}
		role="status"
		class="flex items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-3.5 font-mono text-xs tracking-wider text-white uppercase shadow-md"
	>
		<span>{successMessage}</span>
	</div>
{:else}
	<form
		onsubmit={handleSubmit}
		class={isHero
			? 'flex items-center rounded-2xl border border-neutral-200/90 bg-white/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all focus-within:border-neutral-950 focus-within:ring-4 focus-within:ring-neutral-950/5 hover:border-neutral-300'
			: 'flex flex-col items-center gap-2 rounded-2xl border border-neutral-200/90 bg-white p-1.5 shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-all focus-within:border-neutral-950 focus-within:ring-4 focus-within:ring-neutral-950/5 sm:flex-row sm:rounded-full'}
	>
		<label for={inputId} class="sr-only">Email address</label>
		<input
			id={inputId}
			name="email"
			type="email"
			autocomplete="email"
			bind:value={email}
			disabled={isSubmitting}
			required
			aria-describedby={errorMessage ? errorId : undefined}
			{placeholder}
			class={isHero
				? 'w-full bg-transparent px-3.5 py-2 font-sans text-base tracking-normal text-neutral-900 placeholder-neutral-400 outline-none disabled:opacity-50 sm:px-4 sm:text-[13.5px]'
				: 'w-full bg-transparent px-5 py-3 font-sans text-sm text-neutral-900 placeholder-neutral-400 outline-none disabled:opacity-50'}
		/>
		<button
			type="submit"
			disabled={isSubmitting}
			class={isHero
				? 'flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-neutral-950 px-4 py-2.5 font-sans text-xs font-medium tracking-normal text-white shadow-xs transition-all hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:px-5'
				: 'flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-3 font-sans text-xs font-medium tracking-tight text-white shadow-xs transition-all hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:rounded-full sm:text-sm'}
		>
			{#if isSubmitting}
				<svg
					class="h-3.5 w-3.5 animate-spin text-white"
					fill="none"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
				</svg>
				<span>Joining...</span>
			{:else}
				<span>{buttonText}</span>
				<span class={isHero ? 'font-mono text-[11px] text-neutral-400' : 'font-mono text-xs'}
					>&rarr;</span
				>
			{/if}
		</button>
	</form>
	{#if errorMessage}
		<p id={errorId} role="alert" class="mt-2 font-mono text-xs text-rose-500">{errorMessage}</p>
	{/if}
{/if}
