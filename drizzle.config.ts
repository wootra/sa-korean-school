import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config({ path: '.env.local' });

export default defineConfig({
	schema: './src/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.POSTGRES_URL,
	},
	// dbCredentials: {
	// 	url: process.env.POSTGRES_URL,
	// },
	out: './drizzle',
	verbose: true,
	strict: true,
});
