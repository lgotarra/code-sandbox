import { describe, it, expect } from 'vitest';

describe('home route', () => {
	it('should return a greeting message', () => {
		expect('Hello, World!').toBe('Hello, World!');
	});
});