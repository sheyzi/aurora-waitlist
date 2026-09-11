export interface TimelineEvent {
	time: string;
	text: string;
}

export interface DayItinerary {
	dayLabel: string;
	title: string;
	time: string;
	lead: string;
	photo: string;
	photoCaption: string;
	photoLocation: string;
	events: TimelineEvent[];
}

export interface FlightInfo {
	route: string;
	carrier: string;
	seat: string;
}

export interface StayInfo {
	name: string;
	type: string;
	rating: string;
}

export interface Trip {
	id: string;
	num: string;
	category: string;
	title: string;
	country: string;
	coordinates: string;
	duration: string;
	budget: string;
	heroImage: string;
	voicePrompt: string;
	voiceDuration: string;
	latency: string;
	flight: FlightInfo;
	stay: StayInfo;
	days: DayItinerary[];
}

export interface MarqueeItem {
	type: 'quote' | 'telemetry';
	text: string;
	author?: string;
	detail?: string;
}

export interface HowItWorksStep {
	num: string;
	title: string;
	sub: string;
	desc: string;
	badge: string;
	specs: { label: string; value: string }[];
}
