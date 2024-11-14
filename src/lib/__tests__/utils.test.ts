import { stripUrl } from '@/lib/utils';
describe('utils', () => {
	it('should strip the url', () => {
		expect(stripUrl('http://localhost:3000/api/test')).toBe('http://localhost:3000');
		expect(stripUrl('https://localhost:3000/api/test')).toBe('https://localhost:3000');
		expect(stripUrl('http://localhost:3000')).toBe('http://localhost:3000');
		expect(stripUrl('https://localhost:3000')).toBe('https://localhost:3000');
		expect(stripUrl('https://localhost:3000')).toBe('https://localhost:3000');
	});

	it('should return empty string when empty env variable is given', () => {
		expect(stripUrl('')).toBe('');
		expect(stripUrl(undefined)).toBe('');
	});
});
