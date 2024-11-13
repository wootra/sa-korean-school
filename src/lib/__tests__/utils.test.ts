import { stripUrl } from '@/lib/utils';
describe('utils', () => {
	it('should strip the url', () => {
		expect(stripUrl('http://localhost:3000/api/test')).toBe('http://localhost:3000');
	});
});
