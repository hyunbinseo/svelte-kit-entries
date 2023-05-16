import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, fetch }) => {
	if (params.artist !== 'younha') throw error(404);

	const response = await fetch(`/${params.artist}`, { headers: { accept: 'application/json' } });
	if (!response.ok) throw error(500);

	const artist = await response.json();

	return { artist };
};
