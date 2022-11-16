import { CharMap, Coordinates } from './map.types';
import initializeMap from './initializeMap';
import startStepping from '../movement/startStepping';
import { formatResults } from '../utils/string';
import { IResults } from '../movement/movement.types';

const solveMap = (charMap: CharMap) => {
  const startingPoint: Coordinates = initializeMap(charMap);
  const results: IResults = startStepping(startingPoint, charMap);
  formatResults(results);
  return results;
};

export default solveMap;
