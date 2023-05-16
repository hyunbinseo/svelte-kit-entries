import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = false; // Error: Cannot save /younha/end-theory-final-edition as /younha is already a file.

export const entries = (() => [
	{ artist: 'younha', release: 'end-theory-final-edition' }
]) satisfies EntryGenerator;

export const load: PageLoad = async ({ params, fetch }) => {
	if (params.artist !== 'younha' || params.release !== 'end-theory-final-edition') throw error(404);

	const response = await fetch(`/${params.artist}`, { headers: { accept: 'application/json' } });
	if (!response.ok) throw error(500);

	const artist = await response.json();
	artist; // Do something with artist.
	// Do not have to rely on await parent();

	return { artist, release: { name: 'END THEORY', title: '사건의 지평선' } };
};
