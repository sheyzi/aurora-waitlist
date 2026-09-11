import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Simple in-memory store for waitlist entries
const waitlist = new Set<string>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const email = body?.email?.toString().trim().toLowerCase();

		if (!email || !EMAIL_REGEX.test(email)) {
			return json(
				{ success: false, message: 'Please enter a valid email address.' },
				{ status: 400 }
			);
		}

		if (waitlist.has(email)) {
			return json({
				success: true,
				message: "You're already on the waitlist! We'll be in touch soon."
			});
		}

		waitlist.add(email);

		return json({
			success: true,
			message: "✨ You're on the waitlist! We'll be in touch soon."
		});
	} catch (err) {
		return json(
			{ success: false, message: 'An unexpected error occurred. Please try again.' },
			{ status: 500 }
		);
	}
};
