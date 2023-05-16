import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries = (() => [{ slug: '1' }]) satisfies EntryGenerator;
