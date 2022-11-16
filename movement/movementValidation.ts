import { IAssertMovementPossibleArgs } from './movement.types';
const { ERRORS } = require('../constants');

const assertMovementPossible = ({ resolvedMovementFunctions, movementSymbol, isLetter, foundEnd }: IAssertMovementPossibleArgs) => {
  if (!resolvedMovementFunctions.some((func: any) => !!func) && !foundEnd) throw ERRORS.BROKEN_PATH;
  if (movementSymbol === '@' && resolvedMovementFunctions.filter((func: any) => !!func).length > 1) throw ERRORS.MULTIPLE_STARTING_PATHS;
  if (!isLetter && !['@', 'x', '-', '|', '+'].includes(movementSymbol)) throw ERRORS.INVALID_CHARACTER;
};

export { assertMovementPossible };
