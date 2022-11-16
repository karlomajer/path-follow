import { CharMap, Coordinates } from '../map/map.types';
import { Directions, IResults, ISteppingArgs } from './movement.types';
import { checkDirection, assertLegend } from './movementFunctions';
import { assertMovementPossible } from './movementValidation';

const lettersRegex = /[A-Z]/gm;

const startStepping = (startingPoint: Coordinates, charMap: CharMap): IResults => {
  const letters: string[] = [];
  const path: string[] = [];
  const coordinatesWithLetters = new Set<string>();
  let foundEnd = false;

  const nextStep = ({ currentPosition, charMap, currentDirection }: ISteppingArgs): IResults => {
    if (foundEnd) {
      return { letters, path };
    }
    const [row, column] = currentPosition;
    const movementSymbol: any = charMap[row][column];
    const isLetter = movementSymbol.match(lettersRegex);

    path.push(movementSymbol);

    if (isLetter && !coordinatesWithLetters.has(movementSymbol + currentPosition.join(','))) {
      letters.push(movementSymbol);
      coordinatesWithLetters.add(movementSymbol + currentPosition.join(','));
    }

    if (movementSymbol === 'x') {
      foundEnd = true;
      return { letters, path };
    }

    const moveSame = checkDirection({ row, column, direction: currentDirection, currentDirection, charMap, nextStep });
    const moveLeft = checkDirection({ row, column, direction: Directions.LEFT, currentDirection, charMap, nextStep });
    const moveRight = checkDirection({ row, column, direction: Directions.RIGHT, currentDirection, charMap, nextStep });
    const moveUp = checkDirection({ row, column, direction: Directions.UP, currentDirection, charMap, nextStep });
    const moveDown = checkDirection({ row, column, direction: Directions.DOWN, currentDirection, charMap, nextStep });

    assertMovementPossible({ resolvedMovementFunctions: [moveSame, moveLeft, moveRight, moveUp, moveDown], movementSymbol, isLetter, foundEnd });
    assertLegend({ movementSymbol, isLetter, currentDirection, moveSame, moveLeft, moveRight, moveUp, moveDown });

    return { letters, path };
  };

  return nextStep({ currentPosition: startingPoint, charMap, currentDirection: null });
};

export default startStepping;
