import operate from '../logic/operate';

describe('Test suite for the operation methods: sum, substract, multiply, and divide', () => {
  it('11 + 6 must be equal to 17', () => {
    expect(operate(11, 6, '+')).toBe('17');
  });

  it('5 - 28 must be equal to -23', () => {
    expect(operate(5, 28, '-')).toBe('-23');
  });

  it('7 x 3 must be equal to 21', () => {
    expect(operate(7, 3, 'x')).toBe('21');
  });

  it('90 ÷ 3 must be equal to 30', () => {
    expect(operate(90, 3, '÷')).toBe('30');
  });
});
