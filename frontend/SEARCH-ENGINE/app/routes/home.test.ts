import { describe, it, expect } from 'vitest';

describe('Home Route', () => {
	it('should return a successful response', async () => {
		const response = await fetch('http://localhost:5173/');
		expect(response.status).toBe(200);
	});
});