import type { Trip } from '$lib/types';

export const STACK_TRIPS: Trip[] = [
	{
		id: 'santorini',
		num: '01',
		category: 'AEGEAN SANCTUARY',
		title: 'Santorini & Cyclades',
		country: 'Greece',
		coordinates: '36.4618° N, 25.3753° E',
		duration: '5 Days · 4 Nights',
		budget: '$4,300 (2 Pax)',
		heroImage: '/images/santorini/blue-dome.webp',
		voicePrompt:
			'Planning 5 days in Santorini with Maya. We want cliffside cave suites with Caldera plunge pools, secret volcanic swim spots, sunset wine at uncrowded tavernas, and definitely no selfie tour groups.',
		voiceDuration: '00:26',
		latency: '52.1s',
		flight: { route: 'JFK ➔ JTR', carrier: 'Emirates & Aegean · Seamless', seat: 'Suite 3A / 3B' },
		stay: { name: 'Grace Hotel, Auberge Resorts', type: 'Caldera Clifftop Plunge Suite', rating: '9.9' },
		days: [
			{
				dayLabel: 'DAY 01',
				title: 'Oia Blue Dome & Caldera Sunset',
				time: '12:30 PM',
				lead: 'Private driver along the volcanic rim to Oia. Welcome chilled Assyrtiko wine overlooking the Aegean cobalt waters.',
				photo: '/images/santorini/blue-dome.webp',
				photoCaption: 'Oia Blue Dome & Caldera Sunset',
				photoLocation: 'Oia Clifftops',
				events: [
					{ time: '02:00 PM', text: 'Check-in to clifftop suite with private infinity plunge pool' },
					{ time: '04:30 PM', text: 'Solitary walk through whitewashed marble lanes before dusk' },
					{ time: '07:30 PM', text: 'Caldera sunset dinner with grilled Aegean sea bass at Varoulko' }
				]
			},
			{
				dayLabel: 'DAY 02',
				title: 'Skaros Rock Fortress Trail',
				time: '08:45 AM',
				lead: 'Early morning hike along the narrow limestone spine to the medieval ruins of Skaros Rock before midday heat.',
				photo: '/images/santorini/skaros-rock.webp',
				photoCaption: 'Skaros Rock Fortress Promontory',
				photoLocation: 'Imerovigli Ridge',
				events: [
					{ time: '10:00 AM', text: 'Panoramic caldera meditation at Chapel of Panagia Theoskepasti' },
					{ time: '01:30 PM', text: 'Meze & chilled Greek salad on the terrace at Avocado' },
					{ time: '05:30 PM', text: 'Private cliffside massage with wild thyme oils' }
				]
			},
			{
				dayLabel: 'DAY 03',
				title: 'Akrotiri Volcanic Red Beach',
				time: '10:30 AM',
				lead: 'Private speedboat transfer to the towering red volcanic cliffs and iron-rich pebble bay of Akrotiri.',
				photo: '/images/santorini/red-beach.webp',
				photoCaption: 'Akrotiri Volcanic Red Beach & Cliffs',
				photoLocation: 'South Caldera Bay',
				events: [
					{ time: '11:30 AM', text: 'Solitary swim in warm iron-rich geothermal cove waters' },
					{ time: '02:00 PM', text: 'Fresh grilled octopus & fava puree at Cave of Nikolas' },
					{ time: '06:00 PM', text: 'Private catamaran sail past the volcanic hot springs' }
				]
			},
			{
				dayLabel: 'DAY 04',
				title: 'Pyrgos Medieval Hilltop Alleys',
				time: '04:00 PM',
				lead: 'Wander through the peaceful, untouched medieval capital of Pyrgos and its labyrinthine cobblestone arches.',
				photo: '/images/santorini/pyrgos.webp',
				photoCaption: 'Pyrgos Medieval Hilltop Village',
				photoLocation: 'Mount Profitis Ilias',
				events: [
					{ time: '04:30 PM', text: 'Exploring Venetian fortress ruins and secret bell towers' },
					{ time: '06:30 PM', text: 'Rare volcanic soil Assyrtiko tasting at Estate Argyros' },
					{ time: '08:30 PM', text: 'Candlelit farewell dinner under the stars at Rosemary' }
				]
			}
		]
	},
	{
		id: 'tokyo',
		num: '02',
		category: 'NEON & TRADITION',
		title: 'Tokyo Metropolis',
		country: 'Japan',
		coordinates: '35.6762° N, 139.6503° E',
		duration: '6 Days · 5 Nights',
		budget: '$5,400 (2 Pax)',
		heroImage: '/images/tokyo/senso-ji-temple.webp',
		voicePrompt:
			'5 days in Tokyo for two. We want hyper-modern architecture, dawn walks through empty ancient shrines, quiet vinyl record bars, and reservations at intimate 8-seat omakase counters.',
		voiceDuration: '00:24',
		latency: '49.8s',
		flight: { route: 'SFO ➔ HND', carrier: 'ANA First Class · Nonstop', seat: 'The Suite 1A / 1K' },
		stay: { name: 'Aman Tokyo', type: 'Otemachi Panoramic Forest Suite', rating: '9.9' },
		days: [
			{
				dayLabel: 'DAY 01',
				title: 'Midnight Black Cab & Otemachi Check-In',
				time: '06:00 PM',
				lead: 'Private black Crown taxi through rain-slicked neon highways directly to Aman Tokyo in the Otemachi Financial Tower.',
				photo: '/images/tokyo/kokusai-group-taxi.webp',
				photoCaption: 'Midnight Black Cab Transfer through Tokyo',
				photoLocation: 'Ginza & Otemachi',
				events: [
					{ time: '07:30 PM', text: 'Check-in to 34th-floor engawa suite with Imperial Palace view' },
					{ time: '09:00 PM', text: 'Late-night cedar wood tub soak overlooking Tokyo skyline' },
					{ time: '10:30 PM', text: 'Craft whisky highball at intimate listening bar Bar Trench' }
				]
			},
			{
				dayLabel: 'DAY 02',
				title: 'Dawn Incense & Silence at Senso-ji',
				time: '06:30 AM',
				lead: 'Exclusive early arrival at Tokyo’s oldest Buddhist temple before public crowds arrive, listening to morning chant bells.',
				photo: '/images/tokyo/senso-ji-temple.webp',
				photoCaption: 'Senso-ji Temple Dawn Purification',
				photoLocation: 'Asakusa, Taito',
				events: [
					{ time: '08:00 AM', text: 'Warm matcha and fresh melonpan along silent Nakamise' },
					{ time: '11:00 AM', text: 'Private knife-making workshop in Kappabashi with master artisan' },
					{ time: '01:30 PM', text: 'Handmade soba noodles in a 100-year-old wooden teahouse' }
				]
			},
			{
				dayLabel: 'DAY 03',
				title: 'Imperial Palace Moat & Garden Zen',
				time: '10:00 AM',
				lead: 'Contemplative stroll through the sculpted black pines, granite stone bridges, and tranquil moats of Chiyoda.',
				photo: '/images/tokyo/imperial-palace.webp',
				photoCaption: 'Imperial Palace Chiyoda Pine Gardens',
				photoLocation: 'Chiyoda, Tokyo',
				events: [
					{ time: '11:30 AM', text: 'Private tour of East Gardens and historic Edo castle foundations' },
					{ time: '03:00 PM', text: 'Artisan ceramic gallery visit in refined Aoyama' },
					{ time: '07:00 PM', text: '8-seat omakase counter dinner at Sushi Yoshitake' }
				]
			},
			{
				dayLabel: 'DAY 04',
				title: 'Neon Izakaya Odyssey & Hidden Yokocho',
				time: '07:30 PM',
				lead: 'Guided exploration through lantern-lit alleyways, micro-izakayas, and cinematic cyberpunk corridors of Shinjuku.',
				photo: '/images/tokyo/neon-lit-street.webp',
				photoCaption: 'Neon-Lit Shinjuku & Hidden Yokocho',
				photoLocation: 'Shinjuku Nightscape',
				events: [
					{ time: '08:00 PM', text: 'Bincho-tan charcoal yakitori and sake pairings in Omoide Yokocho' },
					{ time: '10:00 PM', text: 'Vintage vinyl session at a 4-seat bar in Golden Gai' },
					{ time: '12:00 AM', text: 'Steaming midnight tonkotsu ramen with local chef' }
				]
			}
		]
	},
	{
		id: 'maldives',
		num: '03',
		category: 'ATOLL SANCTUARY',
		title: 'Maldives Overwater',
		country: 'Maldives',
		coordinates: '3.2028° N, 73.2207° E',
		duration: '5 Days · 4 Nights',
		budget: '$5,800 (2 Pax)',
		heroImage: '/images/maldives/condrad-overwater-villa.webp',
		voicePrompt:
			'Looking for a secluded week in the Maldives. Private overwater villa over turquoise lagoons, reef diving with manta rays, private sandbank dinners under the stars, and zero engine noise.',
		voiceDuration: '00:23',
		latency: '47.5s',
		flight: { route: 'DXB ➔ MLE', carrier: 'Emirates First Class · Nonstop', seat: 'Suite 2E / 2F' },
		stay: { name: 'Conrad Maldives Rangali Island', type: 'Sunset Overwater Villa & Underwater Suite', rating: '9.9' },
		days: [
			{
				dayLabel: 'DAY 01',
				title: 'Seaplane Arrival & Overwater Villa',
				time: '11:15 AM',
				lead: 'Twin-otter seaplane flight over turquoise atolls. Direct check-in to a private stilted timber villa over calm reef waters.',
				photo: '/images/maldives/condrad-overwater-villa.webp',
				photoCaption: 'Conrad Rangali Overwater Sunset Villa',
				photoLocation: 'South Ari Atoll',
				events: [
					{ time: '01:00 PM', text: 'Barefoot champagne lunch on the private sundeck' },
					{ time: '03:30 PM', text: 'Direct lagoon stairs swim among baby blacktip reef sharks' },
					{ time: '07:30 PM', text: '5-meter deep underwater dinner at Ithaa Undersea Restaurant' }
				]
			},
			{
				dayLabel: 'DAY 02',
				title: 'Outer Reef Scuba Drift & Mantas',
				time: '08:30 AM',
				lead: 'Private PADI dive boat to the UNESCO Biosphere coral wall for drift diving with resident manta rays and sea turtles.',
				photo: '/images/maldives/scuba-diving.webp',
				photoCaption: 'Deep Lagoon Coral Wall Scuba Drift',
				photoLocation: 'Rangali Outer Reef',
				events: [
					{ time: '09:30 AM', text: 'Gliding alongside giant pelagic manta rays at cleaning station' },
					{ time: '01:00 PM', text: 'Chilled coconut water & fresh grilled mahi-mahi on the boat' },
					{ time: '04:30 PM', text: 'Overwater glass-floor spa ritual with frangipani oils' }
				]
			},
			{
				dayLabel: 'DAY 03',
				title: 'Private Wooden Dhoni Sunset Cruise',
				time: '04:00 PM',
				lead: 'Traditional handcrafted wooden dhoni sailing through crystal shallows to an uninhabited sandbank.',
				photo: '/images/maldives/boat-ride.webp',
				photoCaption: 'Private Wooden Dhoni Sunset Cruise',
				photoLocation: 'Ari Atoll Lagoon',
				events: [
					{ time: '05:00 PM', text: 'Anchored swim in 1-meter crystal clear lagoon waters' },
					{ time: '06:30 PM', text: 'Chilled Franciacorta as the equatorial sun dips below the horizon' },
					{ time: '08:00 PM', text: 'Private lantern-lit sandbank barbecue under the Milky Way' }
				]
			},
			{
				dayLabel: 'DAY 04',
				title: 'Deep Ocean Jet-Ski Safari & Dolphins',
				time: '09:00 AM',
				lead: 'High-speed jet-ski safari across glass-flat open ocean to encounter wild spinner dolphin pods at play.',
				photo: '/images/maldives/maldives-jetski.webp',
				photoCaption: 'Sandbank Jet-Ski Safari & Dolphin Channel',
				photoLocation: 'Baa Atoll Biosphere',
				events: [
					{ time: '09:30 AM', text: 'Carving spray along deserted white sandbars' },
					{ time: '11:00 AM', text: 'Cruising alongside playful spinner dolphins' },
					{ time: '02:00 PM', text: 'Farewell sunset cocktails at the overwater infinity pool' }
				]
			}
		]
	},
	{
		id: 'swiss-alps',
		num: '04',
		category: 'ALPINE RETREAT',
		title: 'Swiss Alps & Zermatt',
		country: 'Switzerland',
		coordinates: '46.0207° N, 7.7491° E',
		duration: '4 Days · 3 Nights',
		budget: '$4,900 (2 Pax)',
		heroImage: '/images/swiss-alps/snow-cabin.webp',
		voicePrompt:
			'A winter escape to the high Swiss Alps. Ski-in timber cabins, cable car ascents to 3,800 meters, untouched off-piste powder, cedarwood saunas, and fireside truffle fondue.',
		voiceDuration: '00:25',
		latency: '51.2s',
		flight: { route: 'LHR ➔ ZRH', carrier: 'Swiss First · Nonstop', seat: 'Row 1 Panorama' },
		stay: { name: 'The Omnia & Chalet Zermatt Peak', type: 'Modernist Granite Lodge & Pine Cabin', rating: '9.9' },
		days: [
			{
				dayLabel: 'DAY 01',
				title: 'Fireside Timber Chalet Arrival',
				time: '03:30 PM',
				lead: 'Arrival by horse-drawn sleigh at a secluded heavy-timber snow cabin tucked into silent pine woods in Zermatt.',
				photo: '/images/swiss-alps/snow-cabin.webp',
				photoCaption: 'Pine Forest Timber Chalet at Dusk',
				photoLocation: 'Zermatt, Valais',
				events: [
					{ time: '04:30 PM', text: 'Hot spiced glühwein by the open stone fireplace' },
					{ time: '06:00 PM', text: 'Cedar wood outdoor sauna plunge into fresh alpine snow' },
					{ time: '08:00 PM', text: '24-month aged Gruyère and black truffle fondue feast' }
				]
			},
			{
				dayLabel: 'DAY 02',
				title: 'Matterhorn Glacier Cable Car Ascent',
				time: '08:30 AM',
				lead: 'Boarding the 3,883m highest cable car in Europe, soaring above towering glaciers and sheer limestone cliffs.',
				photo: '/images/swiss-alps/cable-car.webp',
				photoCaption: 'Matterhorn Glacier Ride Cable Car',
				photoLocation: 'Klein Matterhorn 3,883m',
				events: [
					{ time: '09:30 AM', text: 'High-altitude panoramic espresso on the summit viewing platform' },
					{ time: '11:00 AM', text: 'Walk through natural ice crystal palace inside the glacier' },
					{ time: '01:30 PM', text: 'Alpine herb broth & rösti at mountain restaurant Chez Vrony' }
				]
			},
			{
				dayLabel: 'DAY 03',
				title: 'Untouched Backcountry Powder Descent',
				time: '09:00 AM',
				lead: 'First tracks down pristine, sunlit alpine powder fields guided by an Olympic-certified mountain guide.',
				photo: '/images/swiss-alps/skiing.webp',
				photoCaption: 'Fresh Corduroy & Backcountry Powder Run',
				photoLocation: 'Gornergrat Slopes',
				events: [
					{ time: '10:00 AM', text: 'Carving wide powder bowls beneath the Matterhorn north face' },
					{ time: '02:00 PM', text: 'Champagne lunch at terrace hut overlooking 38 4,000m peaks' },
					{ time: '05:00 PM', text: 'Granite thermal bath relaxation at The Omnia' }
				]
			},
			{
				dayLabel: 'DAY 04',
				title: 'Summit Ridge Flight & Alpine Thermal Baths',
				time: '11:00 AM',
				lead: 'Panoramic aerial tour skimming past dramatic granite ridges and glacier seracs across the Valais Alps.',
				photo: '/images/swiss-alps/aerial-view.webp',
				photoCaption: 'Panoramic Alpine Ridge Aerial Vista',
				photoLocation: 'Valais Alps Panorama',
				events: [
					{ time: '11:30 AM', text: 'Scenic helicopter flight over Monte Rosa massif' },
					{ time: '03:00 PM', text: 'Thermal mineral pool soak in glass-walled wellness pavilion' },
					{ time: '07:30 PM', text: 'Michelin-starred farewell tasting menu with Valais Pinot Noir' }
				]
			}
		]
	}
];
