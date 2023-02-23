import calculate from '../logic/calculate';

describe('Test suite for the calculate method', () => {
  test('Should test if AC cleans the result object', () => {
    expect(
      calculate(
        {
          total: 5,
          next: 5,
          operation: null,
        },
        'AC',
      ),
    ).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('Should test if +/- toggles positive/negative', () => {
    expect(
      calculate(
        {
          total: 1,
          next: 5,
          operation: null,
        },
        '+/-',
      ),
    ).toEqual({
      total: 1,
      next: '-5',
      operation: null,
    });
  });
});
