// Registry letting the central scroll-spy in +page.svelte drive each
// trip chapter's active day. Manual tab clicks stamp a lockout so the
// spy doesn't override the reader mid-read.

type DaySetter = (index: number) => void;

const setters = new Map<string, DaySetter>();
let manualAt = 0;
const LOCKOUT_MS = 2000;

export function registerTripDaySetter(tripId: string, setter: DaySetter) {
	setters.set(tripId, setter);
	return () => {
		if (setters.get(tripId) === setter) setters.delete(tripId);
	};
}

/** Called by the scroll-spy. Ignored briefly after a manual tab click. */
export function setTripDay(tripId: string, index: number) {
	if (Date.now() - manualAt < LOCKOUT_MS) return;
	setters.get(tripId)?.(index);
}

/** Called by manual tab clicks — applies instantly, pauses the spy. */
export function markTripManual() {
	manualAt = Date.now();
}
