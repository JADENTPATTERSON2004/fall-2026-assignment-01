import { describe, it, expect } from 'vitest';
import { formatName } from '../src/exercise01.js';

describe('Exercise 1: formatName', () => {
  it('should format names with middle names correctly', () => {
    expect(formatName('John', 'Doe', 'Quincy')).toBe('Doe, John Q.');
  });

  it('should format names without middle names correctly', () => {
    expect(formatName('John', 'Doe')).toBe('Doe, John');
    expect(formatName('John', 'Doe', null)).toBe('Doe, John');
    expect(formatName('John', 'Doe', '')).toBe('Doe, John');
  });
});