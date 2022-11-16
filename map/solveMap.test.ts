const { CHAR_MAPS, INVALID_CHAR_MAPS, ERRORS } = require('../constants');
import startStepping from '../movement/startStepping';
import initializeMap from './initializeMap';
import solveMap from './solveMap';

describe('When solving map', () => {
  test('it throws error on fork in path', () => {
    expect(() => solveMap(INVALID_CHAR_MAPS[5])).toThrow(ERRORS.FORK_IN_PATH);
  });

  test('it throws error on broken path', () => {
    expect(() => solveMap(INVALID_CHAR_MAPS[6])).toThrow(ERRORS.BROKEN_PATH);
  });

  test('it throws error on multiple starting paths', () => {
    expect(() => solveMap(INVALID_CHAR_MAPS[7])).toThrow(ERRORS.MULTIPLE_STARTING_PATHS);
  });

  test('it throws error on fake turn', () => {
    expect(() => solveMap(INVALID_CHAR_MAPS[8])).toThrow(ERRORS.FAKE_TURN);
  });

  test('it throws error on invalid character', () => {
    expect(() => solveMap([['@', '-', 'c', 'x']])).toThrow(ERRORS.INVALID_CHARACTER);
  });

  test('it completes basic example', () => {
    const expectedResults = {
      letters: ['A', 'C', 'B'],
      path: ['@', '-', '-', '-', 'A', '-', '-', '-', '+', '|', 'C', '|', '+', '-', '-', '-', '+', '|', '+', '-', 'B', '-', 'x'],
    };
    const startingPoint = initializeMap(CHAR_MAPS[0]);
    const results = startStepping(startingPoint, CHAR_MAPS[0]);
    expect(results.letters).toStrictEqual(expectedResults.letters);
    expect(results.path).toStrictEqual(expectedResults.path);
  });

  test('it completes intersection example', () => {
    const expectedResults = {
      letters: ['A', 'B', 'C', 'D'],
      path: [
        '@',
        '|',
        'A',
        '+',
        '-',
        '-',
        '-',
        'B',
        '-',
        '-',
        '+',
        '|',
        '+',
        '-',
        '-',
        'C',
        '-',
        '+',
        '|',
        '-',
        '|',
        '|',
        '+',
        '-',
        '-',
        '-',
        'D',
        '-',
        '-',
        '+',
        '|',
        'x',
      ],
    };
    const startingPoint = initializeMap(CHAR_MAPS[1]);
    const results = startStepping(startingPoint, CHAR_MAPS[1]);
    expect(results.letters).toStrictEqual(expectedResults.letters);
    expect(results.path).toStrictEqual(expectedResults.path);
  });

  test('it completes "letters on turn" example', () => {
    const expectedResults = {
      letters: ['A', 'C', 'B'],
      path: ['@', '-', '-', '-', 'A', '-', '-', '-', '+', '|', '|', '|', 'C', '-', '-', '-', '+', '|', '+', '-', 'B', '-', 'x'],
    };
    const startingPoint = initializeMap(CHAR_MAPS[2]);
    const results = startStepping(startingPoint, CHAR_MAPS[2]);
    expect(results.letters).toStrictEqual(expectedResults.letters);
    expect(results.path).toStrictEqual(expectedResults.path);
  });

  test('it completes "looping around same letter" example', () => {
    const expectedResults = {
      letters: ['G', 'O', 'O', 'N', 'I', 'E', 'S'],
      path: [
        '@',
        '-',
        'G',
        '-',
        'O',
        '-',
        '+',
        '|',
        '+',
        '-',
        '+',
        '|',
        'O',
        '|',
        '|',
        '+',
        '-',
        'O',
        '-',
        'N',
        '-',
        '+',
        '|',
        'I',
        '|',
        '+',
        '-',
        '+',
        '|',
        '+',
        '-',
        'I',
        '-',
        '+',
        '|',
        'E',
        'S',
        '|',
        'x',
      ],
    };
    const startingPoint = initializeMap(CHAR_MAPS[3]);
    const results = startStepping(startingPoint, CHAR_MAPS[3]);
    expect(results.letters).toStrictEqual(expectedResults.letters);
    expect(results.path).toStrictEqual(expectedResults.path);
  });

  test('it completes "keep direction in compact spaces" example', () => {
    const expectedResults = {
      letters: ['B', 'L', 'A', 'H'],
      path: ['@', 'B', '+', '+', '+', 'B', '|', '+', '-', 'L', '-', '+', 'A', '+', '+', '+', 'A', '-', '+', 'H', 'x'],
    };
    const startingPoint = initializeMap(CHAR_MAPS[4]);
    const results = startStepping(startingPoint, CHAR_MAPS[4]);
    expect(results.letters).toStrictEqual(expectedResults.letters);
    expect(results.path).toStrictEqual(expectedResults.path);
  });

  test('it completes "ignore stuff after end " example', () => {
    const expectedResults = {
      letters: ['A', 'B'],
      path: ['@', '-', 'A', '-', '-', '+', '|', '+', '-', 'B', '-', '-', 'x'],
    };
    const startingPoint = initializeMap(CHAR_MAPS[5]);
    const results = startStepping(startingPoint, CHAR_MAPS[5]);
    expect(results.letters).toStrictEqual(expectedResults.letters);
    expect(results.path).toStrictEqual(expectedResults.path);
  });
});
