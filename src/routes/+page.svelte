<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { getHeroFolio } from '$lib/utils';
	import { setTripDay } from '$lib/tripSpy';

	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import CuratedTripsSection from '$lib/components/CuratedTripsSection.svelte';
	import ProofMarquee from '$lib/components/ProofMarquee.svelte';
	import HowItWorksSection from '$lib/components/HowItWorksSection.svelte';
	import WaitlistCtaSection from '$lib/components/WaitlistCtaSection.svelte';
	import Footer from '$lib/components/Footer.svelte';

	gsap.registerPlugin(ScrollTrigger);

	const folio = getHeroFolio(); // 2-plate travel folio

	let isScrolled = $state(false);
	let navCompact = $state(false);

	// Realistic 1-month countdown persisted in localStorage across page reloads
	let days = $state(29);
	let hours = $state(23);
	let minutes = $state(59);
	let seconds = $state(59);

	const pad = (n: number) => String(n).padStart(2, '0');

	function initCountdown() {
		const STORAGE_KEY = 'aurora_launch_deadline';
		const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
		const now = Date.now();

		let target: number;
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const parsed = parseInt(stored, 10);
			if (!isNaN(parsed) && parsed > now) {
				target = parsed;
			} else {
				target = now + ONE_MONTH_MS;
				localStorage.setItem(STORAGE_KEY, String(target));
			}
		} else {
			target = now + ONE_MONTH_MS;
			localStorage.setItem(STORAGE_KEY, String(target));
		}

		const update = () => {
			if (typeof document !== 'undefined' && document.hidden) return;
			const currentNow = Date.now();
			const diff = Math.max(0, target - currentNow);
			days = Math.floor(diff / (1000 * 60 * 60 * 24));
			hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((diff / (1000 * 60)) % 60);
			seconds = Math.floor((diff / 1000) % 60);
		};

		update();
		const interval = setInterval(update, 1000);
		const onVisible = () => {
			if (!document.hidden) update();
		};
		document.addEventListener('visibilitychange', onVisible);
		return () => {
			clearInterval(interval);
			document.removeEventListener('visibilitychange', onVisible);
		};
	}

	let lenis: Lenis | null = null;

	function focusWaitlist() {
		const el = document.getElementById('waitlist-email') as HTMLInputElement | null;
		if (el) {
			if (lenis) {
				lenis.scrollTo(el, { offset: -120, duration: 1.2 });
			} else {
				el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
			// Delay focus so fixed folio navbar doesn't cover the input on arrival
			window.setTimeout(() => el.focus({ preventScroll: true }), 650);
		}
	}

	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			if (lenis) {
				lenis.scrollTo(el, { offset: -84, duration: 1.2 });
			} else {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	function scrollToTop() {
		if (lenis) {
			lenis.scrollTo(0, { duration: 1.4 });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	onMount(() => {
		const clearCountdown = initCountdown();

		const isTouch =
			typeof window !== 'undefined' &&
			('ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));

		let updateLenis: ((time: number) => void) | null = null;
		const handleTouchScroll = () => {
			ScrollTrigger.update();
		};

		if (!isTouch) {
			// 0. Initialize Lenis smooth scroll engine for desktop mouse/trackpad
			lenis = new Lenis({
				duration: 1.15,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				orientation: 'vertical',
				gestureOrientation: 'vertical',
				smoothWheel: true,
				touchMultiplier: 1.0
			});

			// Sync Lenis scroll with GSAP ScrollTrigger
			lenis.on('scroll', () => {
				ScrollTrigger.update();
			});

			updateLenis = (time: number) => {
				lenis?.raf(time * 1000);
			};
			gsap.ticker.add(updateLenis);
		} else {
			// Native hardware 60/120Hz compositor scrolling for touch screens without main thread hitching
			window.addEventListener('scroll', handleTouchScroll, { passive: true });
		}

		// Adaptive lag smoothing: smoothly absorbs garbage collection and image decoding dips
		gsap.ticker.lagSmoothing(500, 33);

		// --- HERO: Travel Folio entrance (2 plates + center dossier) ---
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		gsap.set('.site-nav', { autoAlpha: 0, y: -16 });
		gsap.set('.center-hero', { autoAlpha: 0, y: 20 });
		gsap.set('.folio-plate-left', { autoAlpha: 0, x: -32, y: 16, rotation: -10 });
		gsap.set('.folio-plate-right', { autoAlpha: 0, x: 32, y: 16, rotation: 9 });
		gsap.set('.folio-mini-left', { autoAlpha: 0, x: -20, y: 12, rotation: -12 });
		gsap.set('.folio-mini-right', { autoAlpha: 0, x: 20, y: 12, rotation: 12 });
		gsap.set('.card-fastener', { autoAlpha: 0, scale: 1.4, y: -10 });

		tl.to('.site-nav', { autoAlpha: 1, y: 0, duration: 0.6 }, 0)
			.to('.center-hero', { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1)
			.to(
				'.folio-mini-left',
				{ autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.7, ease: 'back.out(1.6)' },
				0.25
			)
			.to(
				'.folio-mini-right',
				{ autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.7, ease: 'back.out(1.6)' },
				0.33
			)
			.to(
				'.folio-plate-left',
				{ autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.9, ease: 'back.out(1.4)' },
				0.2
			)
			.to(
				'.folio-plate-right',
				{ autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.9, ease: 'back.out(1.4)' },
				0.28
			)
			.to(
				'.card-fastener',
				{ autoAlpha: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(2.2)', stagger: 0.08 },
				0.55
			);

		// 8b. Track scroll: navbar border + collapse to CTA bubble past the hero
		const handleScroll = () => {
			isScrolled = window.scrollY > 15;
			navCompact = window.scrollY > window.innerHeight * 0.9;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		// 9. Sticky Scroll Transition: gentle folio fade + parallax
		const scrollTriggerInstance = ScrollTrigger.create({
			trigger: '#hero-stage',
			start: 'top top',
			end: 'bottom bottom',
			scrub: 0.5,
			onUpdate: (self) => {
				const p = self.progress;

				// Toggle visibility to prevent invisible hero from consuming GPU layers once scrolled past
				if (p >= 1) {
					gsap.set('#hero-header', { visibility: 'hidden' });
				} else {
					gsap.set('#hero-header', { visibility: 'visible' });
				}

				// If user scrolls during the entrance intro, finish it instantly
				if (p > 0.02 && tl.progress() < 1) {
					tl.progress(1);
				}

				// Center dossier settles back down and fades — reverse of entrance
				const heroOpacity = Math.max(0, Math.pow(Math.max(0, 1 - p / 0.75), 1.1));
				gsap.set('.center-hero', {
					opacity: heroOpacity,
					y: p * 60,
					pointerEvents: p > 0.05 ? 'none' : 'auto'
				});

				// Early fade out for form and scroll prompt
				const subElementsOpacity = Math.max(0, 1 - p * 3.2);
				gsap.set(['.hero-form-wrapper', '.scroll-prompt'], {
					opacity: subElementsOpacity
				});

				// Folio plates exit out by the sides, still drifting up
				const plateOpacity = Math.max(0, Math.pow(Math.max(0, 1 - p / 0.85), 1.15));
				gsap.set('.folio-plate-left', {
					x: -p * 140,
					y: -p * 40,
					rotation: -p * 6,
					opacity: plateOpacity
				});
				gsap.set('.folio-plate-right', {
					x: p * 140,
					y: -p * 40,
					rotation: p * 6,
					opacity: plateOpacity
				});

				// Mobile minis scatter up-and-out to the sides, ahead of the text
				const miniOpacity = Math.max(0, Math.pow(Math.max(0, 1 - p / 0.6), 1.1));
				gsap.set('.folio-mini-left', {
					x: -p * 120,
					y: -p * 120,
					rotation: -p * 8,
					opacity: miniOpacity
				});
				gsap.set('.folio-mini-right', {
					x: p * 120,
					y: -p * 120,
					rotation: p * 8,
					opacity: miniOpacity
				});
			}
		});

		// 10. Trip chapter scroll-spy: day blocks drive the active day per trip.
		// Manual tab clicks pause the spy briefly (see tripSpy lockout).
		const spyTriggers: ScrollTrigger[] = [];
		document.querySelectorAll<HTMLElement>('.trip-day-block').forEach((block) => {
			const tripId = block.dataset.trip;
			const dayIndex = Number(block.dataset.day ?? 0);
			if (!tripId) return;
			spyTriggers.push(
				ScrollTrigger.create({
					trigger: block,
					start: 'top center',
					end: 'bottom center',
					onToggle: (self) => {
						if (self.isActive) setTripDay(tripId, dayIndex);
					}
				})
			);
			// Center-stage fade: full size + opacity at viewport center,
			// scaled down and dimmed while entering or leaving
			spyTriggers.push(
				ScrollTrigger.create({
					trigger: block,
					start: 'top bottom',
					end: 'bottom top',
					onUpdate: (self) => {
						const centered = 1 - Math.abs(self.progress - 0.5) * 2;
						const e = Math.max(0, Math.min(1, centered));
						gsap.set(block, {
							opacity: 0.2 + 0.8 * e,
							scale: 0.94 + 0.06 * e,
							transformOrigin: 'center center'
						});
					}
				})
			);
		});

		// 11. Reveal on Scroll for sections below
		const revealTriggers = ScrollTrigger.batch('.reveal-on-scroll', {
			start: 'top 90%',
			once: true,
			onEnter: (batch) => {
				gsap.to(batch, {
					autoAlpha: 1,
					y: 0,
					duration: 0.85,
					stagger: 0.12,
					ease: 'power3.out',
					overwrite: 'auto'
				});
			}
		});

		// Images/fonts loading late can shift layout — recalc trigger positions
		const handleLoad = () => {
			ScrollTrigger.refresh();
		};
		window.addEventListener('load', handleLoad);

		return () => {
			clearCountdown();
			tl.kill();
			lenis?.destroy();
			lenis = null;
			if (updateLenis) {
				gsap.ticker.remove(updateLenis);
			}
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('scroll', handleTouchScroll);
			window.removeEventListener('load', handleLoad);
			scrollTriggerInstance.kill();
			revealTriggers.forEach((t) => t.kill());
			spyTriggers.forEach((t) => t.kill());
			ScrollTrigger.getAll().forEach((st) => st.kill());
			gsap.killTweensOf([
				'.folio-plate-left',
				'.folio-plate-right',
				'.folio-mini-left',
				'.folio-mini-right',
				'.card-fastener',
				'.center-hero',
				'.hero-form-wrapper',
				'.site-nav',
				'.reveal-on-scroll'
			]);
		};
	});
</script>

<div class="relative w-full overflow-x-clip bg-background text-ink select-none">
	<!-- Fixed Stationary Tactile Paper Canvas (Persists uninterrupted as elements scroll) -->
	<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
		<!-- Authentic tactile paper texture tile -->
		<div
			class="pointer-events-none absolute inset-0 bg-repeat opacity-95"
			style="background-image: url('/textures/paper-texture.png'); background-size: 560px 420px;"
		></div>

		<!-- Subtle ambient depth vignette -->
		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(160,150,130,0.10)_100%)]"
		></div>
	</div>

	<!-- Architectural Frosted Navbar -->
	<Navbar
		{isScrolled}
		compact={navCompact}
		onScrollToSection={scrollToSection}
		onFocusWaitlist={focusWaitlist}
	/>

	<!-- Hero Section: Travel Folio Spread in Sticky Stage Container -->
	<div id="hero-stage" class="hero-stage-viewport relative w-full">
		<HeroSection {folio} />
	</div>

	<!-- Curated Trips: Journey Chapters -->
	<CuratedTripsSection />

	<!-- Proof Marquee: Architectural Press & Live Telemetry -->
	<ProofMarquee />

	<!-- How It Works Architecture Section -->
	<HowItWorksSection
		onFocusWaitlist={focusWaitlist}
		onBrowseTrips={() => scrollToSection('sample-trips')}
	/>

	<!-- Waitlist CTA Section -->
	<WaitlistCtaSection {days} {hours} {minutes} {seconds} {pad} />

	<!-- Studio Footer -->
	<Footer onScrollToTop={scrollToTop} />
</div>
