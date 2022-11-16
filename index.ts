const { CHAR_MAPS } = require('./constants');
import solveMap from './map/solveMap';

try {
  solveMap(CHAR_MAPS[0]);
} catch (e) {
  console.error(e);
}
