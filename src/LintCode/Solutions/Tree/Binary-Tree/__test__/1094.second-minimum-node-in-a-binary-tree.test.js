import findSecondMinimumValue from '../1094.second-minimum-node-in-a-binary-tree';

describe('test', () => {
  it('test', () => {
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
    // expect(findSecondMinimumValue(root)).toBe(5);
  });
});
