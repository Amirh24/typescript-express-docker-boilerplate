import { inspect } from 'util';

export const stringify = (varToStringify: any, depth = 3): string => inspect(varToStringify, false /* showHidden */, depth);
