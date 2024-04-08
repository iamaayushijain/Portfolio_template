/**
 * Rotates the array `num` places to the left, i.e. it shifts `num` items out of the array and pushes them back on the end.
 * The reverse is done when `num` is negative.
 * In addition, `rotate` automatically wraps rotations which are larger than `array.length`.
 *
 * @example
 *
 * var beatles = ['paul', 'john', 'ringo', 'george'];
 * rotate(beatles, 2);
 * console.log(beatles); // [ 'ringo', 'george', 'paul', 'john' ]
 */
declare function rotate<T>(array: T[], num: number): T[];

export = rotate;

/**
 * Returns all rotations for the given array. It does not modify the passed in array.
 *
 * @example
 *
 * var beatles = ['paul', 'john', 'ringo', 'george'];
 * console.log(rotate.all(beatles));
 * // [ [ 'paul', 'john', 'ringo', 'george' ],
 * //   [ 'john', 'ringo', 'george', 'paul' ],
 * //   [ 'ringo', 'george', 'paul', 'john' ],
 * //   [ 'george', 'paul', 'john', 'ringo' ] ]
 */
export function all<T>(array: T[]): T[][];
