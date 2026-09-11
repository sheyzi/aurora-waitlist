import { STACK_TRIPS } from './trips';

// Canonical live example for How It Works — Santorini trip 01 doubles as the
// hero plate, so readers recognize the voice note from the chapters above.
const trip = STACK_TRIPS[0];

export const HOW_IT_WORKS_EXAMPLE = {
	tripId: trip.id,
	tripTitle: trip.title,
	voiceQuote: trip.voicePrompt,
	voiceDuration: trip.voiceDuration,
	latency: trip.latency,
	duration: trip.duration,
	stayName: trip.stay.name,
	stayType: trip.stay.type,
	stayRating: trip.stay.rating,
	badges: [trip.title, trip.duration, '2 guests', 'No tour groups'],
	dayOne: {
		label: trip.days[0].dayLabel,
		title: trip.days[0].title,
		events: trip.days[0].events.slice(0, 3)
	},
	pacing: {
		from: trip.days[2].title,
		to: trip.days[0].title,
		note: 'Sequenced for empty swim coves before day boats, back for caldera sunset.'
	},
	waveform: [
		30, 45, 70, 90, 60, 40, 75, 100, 85, 60, 45, 80, 95, 70, 50, 65, 85, 40, 30, 60, 75, 45, 30, 55,
		70, 40
	]
};
