const CHAR_MAPS = [
  [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [null, null, null, null, null, null, null, null, '|'],
    ['x', '-', 'B', '-', '+', null, null, null, 'C'],
    [null, null, null, null, '|', null, null, null, '|'],
    [null, null, null, null, '+', '-', '-', '-', '+'],
  ],
  [
    ['@'],
    ['|', null, '+', '-', 'C', '-', '-', '+'],
    ['A', null, '|', null, null, null, null, '|'],
    ['+', '-', '-', '-', 'B', '-', '-', '+'],
    [null, null, '|', null, null, null, null, null, null, 'x'],
    [null, null, '|', null, null, null, null, null, null, '|'],
    [null, null, '+', '-', '-', '-', 'D', '-', '-', '+'],
  ],
  [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [null, null, null, null, null, null, null, null, '|'],
    ['x', '-', 'B', '-', '+', null, null, null, '|'],
    [null, null, null, null, '|', null, null, null, '|'],
    [null, null, null, null, '+', '-', '-', '-', 'C'],
  ],
  [
    [null, null, null, null, '+', '-', 'O', '-', 'N', '-', '+'],
    [null, null, null, null, '|', null, null, null, null, null, '|'],
    [null, null, null, null, '|', null, null, null, '+', '-', 'I', '-', '+'],
    ['@', '-', 'G', '-', 'O', '-', '+', null, '|', null, '|', null, '|'],
    [null, null, null, null, '|', null, '|', null, '+', '-', '+', null, 'E'],
    [null, null, null, null, '+', '-', '+', null, null, null, null, null, 'S'],
    [null, null, null, null, null, null, null, null, null, null, null, null, '|'],
    [null, null, null, null, null, null, null, null, null, null, null, null, 'x'],
  ],
  [
    [null, '+', '-', 'L', '-', '+'],
    [null, '|', null, null, '+', 'A', '-', '+'],
    ['@', 'B', '+', null, '+', '+', null, 'H'],
    [null, '+', '+', null, null, null, null, 'x'],
  ],
  [
    ['@', '-', 'A', '-', '-', '+'],
    [null, null, null, null, null, '|'],
    [null, null, null, null, null, '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D'],
  ],
];

const INVALID_CHAR_MAPS = [
  [
    [null, null, null, '-', 'A', '-', '-', '-', '+'],
    [null, null, null, null, null, null, null, null, '|'],
    ['x', '-', 'B', '-', '+', null, null, null, 'C'],
    [null, null, null, null, '|', null, null, null, '|'],
    [null, null, null, null, '+', '-', '-', '-', '+'],
  ],
  [
    ['@', '-', '-', 'A', '-', '-', '-', '+'],
    [null, null, null, null, null, null, null, '|'],
    [null, 'B', '-', '+', null, null, null, 'C'],
    [null, null, null, '|', null, null, null, '|'],
    [null, null, null, '+', '-', '-', '-', '+'],
  ],
  [
    [null, '@', '-', '-', 'A', '-', '@', '-', '+'],
    [null, null, null, null, null, null, null, null, '|'],
    ['x', '-', 'B', '-', '+', null, null, null, 'C'],
    [null, null, null, null, '|', null, null, null, '|'],
    [null, null, null, null, '+', '-', '-', '-', '+'],
  ],
  [
    ['@', '-', '-', 'A', '-', '-', '-', '+'],
    [null, null, null, null, null, null, null, '|'],
    [null, null, null, null, null, null, null, 'C'],
    [null, null, null, null, null, null, null, 'x'],
    [null, null, null, '@', '-', 'B', '-', '+'],
  ],
  [
    [null, null, null, null, null, '@', '-', '-', 'A', '-', '-', 'x'],
    [],
    [null, null, null, null, 'x', '-', 'B', '-', '+'],
    [null, null, null, null, null, null, null, null, '|'],
    [null, null, null, null, null, null, null, null, '@'],
  ],
  [
    [null, null, null, null, null, 'x', '-', 'B'],
    [null, null, null, null, null, null, null, '|'],
    ['@', '-', '-', 'A', '-', '-', '-', '+'],
    [null, null, null, null, null, null, null, '|'],
    [null, null, 'x', '+', null, null, null, 'C'],
    [null, null, null, '|', null, null, null, '|'],
    [null, null, null, '+', '-', '-', '-', '+'],
  ],
  [
    [null, null, '@', '-', '-', 'A', '-', '+', null, null],
    [null, null, null, null, null, null, null, '|', null, null],
    [],
    [null, null, null, null, null, null, null, 'B', '-', 'x'],
  ],
  [['x', '-', 'B', '-', '@', '-', 'A', '-', 'x']],
  [['@', '-', 'A', '-', '+', '-', 'B', '-', 'x']],
];

const ERRORS = {
  MULTIPLE_STARTING_POINTS: 'Map cannot have more than 1 starting point',
  NO_STARTING_POINT: 'Map needs to have a starting point',
  NO_ENDING_POINT: 'Map needs to have an ending point',
  BROKEN_PATH: 'Map cannot have a broken path',
  FORK_IN_PATH: 'Map cannot have a fork in path',
  MULTIPLE_STARTING_PATHS: 'Map cannot have more than 1 starting path',
  FAKE_TURN: 'Map cannot have a fake turn',
  INVALID_CHARACTER: 'Map should only contain valid characters (A-Z, @, x, -, |, +)',
};

module.exports = { CHAR_MAPS, INVALID_CHAR_MAPS, ERRORS };
