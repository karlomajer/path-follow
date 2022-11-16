import { IResults } from '../movement/movement.types';

const formatResults = ({ letters, path }: IResults) => {
  console.log(`Letters ${letters.join('')}`);
  console.log(`Path as characters ${path.join('')}`);
};

export { formatResults };
