export interface MarqueeQuote {
	type: 'quote';
	text: string;
	author: string;
}

export interface MarqueeBadge {
	type: 'badge';
	label: string;
	val: string;
}

export type MarqueeEntry = MarqueeQuote | MarqueeBadge;

export const MARQUEE_ITEMS: MarqueeEntry[] = [
	{ type: 'quote', text: '“The first travel engine with genuine aesthetic taste.”', author: 'MONOCLE' },
	{ type: 'badge', label: 'PARALLEL ROUTING', val: '42 AIRLINES INDEXED' },
	{ type: 'quote', text: '“Like an obsessively cultured local friend in every city.”', author: 'CONDÉ NAST TRAVELER' },
	{ type: 'badge', label: 'SYNTHESIS LATENCY', val: '54.2 SECONDS' },
	{ type: 'quote', text: '“Spreadsheets and 40 open browser tabs are officially dead.”', author: 'FINANCIAL TIMES' },
	{ type: 'badge', label: 'CURATION', val: '10,000+ BOUTIQUE SANCTUARIES' },
	{ type: 'quote', text: '“Aurora turns travel planning into pure art direction.”', author: 'WALLPAPER*' },
	{ type: 'badge', label: 'ZERO MARKUP', val: 'DIRECT WHOLESALE RESERVATIONS' },
	{ type: 'quote', text: '“Precision down to the 6 AM private temple meditation.”', author: 'ROBB REPORT' },
	{ type: 'badge', label: 'WAITLIST VELOCITY', val: '2,840+ FOUNDING MEMBERS' }
];
