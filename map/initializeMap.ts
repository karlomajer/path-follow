import { CharMap, Coordinates } from './map.types';
const { ERRORS } = require('../constants');

const initializeMap = (charMap: CharMap): Coordinates => {
  const startingPoint: Coordinates = [];
  const endingPoint: Coordinates = [];

  for (let i = 0; i < charMap.length; i++) {
    for (let j = 0; j < charMap[i].length; j++) {
      if (charMap[i][j] === '@') {
        if (startingPoint.length > 0) {
          throw ERRORS.MULTIPLE_STARTING_POINTS;
        }
        startingPoint.push(i, j);
      }

      if (charMap[i][j] === 'x') {
        endingPoint.push(i, j);
      }
    }
  }

  if (startingPoint.length === 0) throw ERRORS.NO_STARTING_POINT;
  if (endingPoint.length === 0) throw ERRORS.NO_ENDING_POINT;

  return startingPoint;
};

export default initializeMap;
