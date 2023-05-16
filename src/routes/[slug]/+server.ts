import { json } from '@sveltejs/kit';
import type { EntryGenerator, RequestHandler } from './$types';

export const prerender = true;
export const entries = (() => [{ slug: '2' }]) satisfies EntryGenerator;

export const GET = (({ params }) => json(params)) satisfies RequestHandler;
