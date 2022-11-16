const { CHAR_MAPS, INVALID_CHAR_MAPS, ERRORS } = require('../constants');
import initializeMap from './initializeMap';

test('finds start', () => {
  expect(initializeMap(CHAR_MAPS[3])).toStrictEqual([3, 0]);
});

test('throws error on missing start', () => {
  expect(() => initializeMap(INVALID_CHAR_MAPS[0])).toThrow(ERRORS.NO_STARTING_POINT);
});

test('throws error on missing end', () => {
  expect(() => initializeMap(INVALID_CHAR_MAPS[1])).toThrow(ERRORS.NO_ENDING_POINT);
});

test('throws error on multiple starts', () => {
  expect(() => initializeMap(INVALID_CHAR_MAPS[2])).toThrow(ERRORS.MULTIPLE_STARTING_POINTS);
  expect(() => initializeMap(INVALID_CHAR_MAPS[3])).toThrow(ERRORS.MULTIPLE_STARTING_POINTS);
  expect(() => initializeMap(INVALID_CHAR_MAPS[4])).toThrow(ERRORS.MULTIPLE_STARTING_POINTS);
});
