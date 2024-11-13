/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname + '/',
		},
	},
});
