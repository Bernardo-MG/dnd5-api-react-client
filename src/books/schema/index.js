import { schema } from 'normalizr';

/**
 * Document schema.
 */
export const book = new schema.Entity('books', {}, {
   idAttribute: 'key'
});
