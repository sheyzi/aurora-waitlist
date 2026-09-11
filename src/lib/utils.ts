export interface FolioPlate {
	id: string;
	src: string;
	title: string;
	region: string;
}

export function getHeroFolio(): FolioPlate[] {
	return [
		{
			id: 'santorini',
			src: '/images/santorini/blue-dome.webp',
			title: 'Oia',
			region: 'Santorini, Greece'
		},
		{
			id: 'tokyo',
			src: '/images/tokyo/senso-ji-temple.webp',
			title: 'Asakusa',
			region: 'Tokyo, Japan'
		}
	];
}
