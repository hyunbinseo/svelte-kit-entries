import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries = (() => [{ artist: 'younha' }]) satisfies EntryGenerator;
