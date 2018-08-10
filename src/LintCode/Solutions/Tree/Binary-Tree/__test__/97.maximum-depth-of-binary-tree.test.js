import maxDepth from '../97.maximum-depth-of-binary-tree';

describe('maximum depth of binary tree', () => {
  it('DFS', () => {
    const root = {
      val: 2,
      right: {
        val: 2,
        right: null,
        left: null,
      },
      left: {
        val: 5,
        right: {
          val: 5,
          right: null,
          left: null,
        },
        left: {
          val: 7,
          right: null,
          left: null,
        },
      },
    };
    expect(maxDepth(root)).toBe(3);
  });
});
