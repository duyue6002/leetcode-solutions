import maxSubArray from '../53.maximum-subarray';

describe('Maximum Subarray', () => {
  it('test', () => {
    const arr = [-1, 3, -1, -1, 5];
    expect(maxSubArray(arr)).toBe(6);
  });
});
