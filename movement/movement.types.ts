import { CharMap, Coordinates } from '../map/map.types';

interface IResults {
  letters: string[];
  path: string[];
}

enum Directions {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  UP = 'UP',
  DOWN = 'DOWN',
}

interface ISteppingArgs {
  currentPosition: Coordinates;
  charMap: CharMap;
  currentDirection: Directions | null;
}

type NextStep = (arg0: ISteppingArgs) => any;

interface IMovementArgs {
  row: number;
  column: number;
  charMap: CharMap;
  currentDirection: Directions | null;
  nextStep: NextStep;
}

interface ICheckDirectionArgs extends IMovementArgs {
  direction: Directions | null;
}

interface IAssertMovementPossibleArgs {
  resolvedMovementFunctions: Array<(() => NextStep) | undefined>;
  movementSymbol: string;
  isLetter: boolean;
  foundEnd: boolean;
}

interface IAssertLegendArgs {
  movementSymbol: any;
  isLetter: boolean;
  currentDirection: Directions | null;
  moveSame: (() => NextStep) | undefined;
  moveLeft: (() => NextStep) | undefined;
  moveRight: (() => NextStep) | undefined;
  moveUp: (() => NextStep) | undefined;
  moveDown: (() => NextStep) | undefined;
}

export { IResults, Directions, ISteppingArgs, IMovementArgs, ICheckDirectionArgs, IAssertMovementPossibleArgs, IAssertLegendArgs, NextStep };
