import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET = (({ params }) => {
	if (params.artist !== 'younha') throw error(404);

	return json({ name: '윤하', instagram: 'younha_holic' });
}) satisfies RequestHandler;
