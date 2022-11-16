import { Directions } from './movement.types';
import { assertLegend } from './movementFunctions';

describe('When asserting legends', () => {
  test('it moves from start if valid', () => {
    const moveSame = undefined;
    const moveLeft = undefined;
    const moveRight = undefined;
    const moveUp = undefined;
    const moveDown = jest.fn();
    assertLegend({ movementSymbol: '@', isLetter: false, currentDirection: null, moveSame, moveLeft, moveRight, moveUp, moveDown });
    expect(moveDown.mock.calls.length).toBe(1);
  });

  test('it keeps direction if valid', () => {
    const moveSame = jest.fn();
    const moveLeft = undefined;
    const moveRight = undefined;
    const moveUp = undefined;
    const moveDown = undefined;
    assertLegend({ movementSymbol: '-', isLetter: false, currentDirection: Directions.LEFT, moveSame, moveLeft, moveRight, moveUp, moveDown });
    expect(moveSame.mock.calls.length).toBe(1);
  });

  test('it changes direction on intersection if valid', () => {
    const moveSame = undefined;
    const moveLeft = jest.fn();
    const moveRight = undefined;
    const moveUp = jest.fn();
    const moveDown = undefined;
    assertLegend({ movementSymbol: '+', isLetter: false, currentDirection: Directions.UP, moveSame, moveLeft, moveRight, moveUp, moveDown });
    expect(moveLeft.mock.calls.length).toBe(1);
    assertLegend({ movementSymbol: 'C', isLetter: true, currentDirection: Directions.LEFT, moveSame, moveLeft, moveRight, moveUp, moveDown });
    expect(moveUp.mock.calls.length).toBe(1);
  });
});
