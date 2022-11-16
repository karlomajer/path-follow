import { Directions, IMovementArgs, ICheckDirectionArgs, IAssertLegendArgs } from './movement.types';
const { ERRORS } = require('../constants');

const movementFunctions = {
  [Directions.LEFT]: ({ row, column, charMap, currentDirection, nextStep }: IMovementArgs) => {
    if (charMap[row][column - 1] && currentDirection !== Directions.RIGHT) {
      return () => nextStep({ currentPosition: [row, column - 1], charMap, currentDirection: Directions.LEFT });
    }
  },

  [Directions.RIGHT]: ({ row, column, charMap, currentDirection, nextStep }: IMovementArgs) => {
    if (charMap[row][column + 1] && currentDirection !== Directions.LEFT) {
      return () => nextStep({ currentPosition: [row, column + 1], charMap, currentDirection: Directions.RIGHT });
    }
  },

  [Directions.UP]: ({ row, column, charMap, currentDirection, nextStep }: IMovementArgs) => {
    if (charMap[row - 1] && charMap[row - 1][column] && currentDirection !== Directions.DOWN) {
      return () => nextStep({ currentPosition: [row - 1, column], charMap, currentDirection: Directions.UP });
    }
  },

  [Directions.DOWN]: ({ row, column, charMap, currentDirection, nextStep }: IMovementArgs) => {
    if (charMap[row + 1] && charMap[row + 1][column] && currentDirection !== Directions.UP) {
      return () => nextStep({ currentPosition: [row + 1, column], charMap, currentDirection: Directions.DOWN });
    }
  },
};

const checkDirection = ({ row, column, charMap, direction, currentDirection, nextStep }: ICheckDirectionArgs) => {
  if (direction) {
    return movementFunctions[direction]({ row, column, charMap, currentDirection, nextStep });
  }
};

const assertLegend = ({ movementSymbol, isLetter, currentDirection, moveSame, moveLeft, moveRight, moveUp, moveDown }: IAssertLegendArgs) => {
  if (movementSymbol === '+' || (!moveSame && isLetter)) {
    if (currentDirection === Directions.LEFT || currentDirection === Directions.RIGHT) {
      if (moveUp && moveDown) throw ERRORS.FORK_IN_PATH;
      if (!moveUp && !moveDown) throw ERRORS.FAKE_TURN;
      moveUp && moveUp();
      moveDown && moveDown();
    } else {
      if (moveLeft && moveRight) throw ERRORS.FORK_IN_PATH;
      if (!moveLeft && !moveRight) throw ERRORS.FAKE_TURN;
      moveLeft && moveLeft();
      moveRight && moveRight();
    }
  }

  moveSame && moveSame();

  if (movementSymbol === '-' || movementSymbol === '@') {
    moveLeft && moveLeft();
    moveRight && moveRight();
  }

  if (movementSymbol === '|' || movementSymbol === '@') {
    moveUp && moveUp();
    moveDown && moveDown();
  }
};

export { checkDirection, assertLegend };
