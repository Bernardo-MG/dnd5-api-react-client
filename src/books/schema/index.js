import { schema } from 'normalizr';

/**
 * Author key schema.
 */
export const authorKey = new schema.Entity('authorKeys');

/**
 * Language schema.
 */
export const language = new schema.Entity('languages');

/**
 * Subject schema.
 */
export const subject = new schema.Entity('subjects');

/**
 * Document schema.
 */
export const book = new schema.Entity('books', {
   author_key: [authorKey],
   language: [language],
   subject: [subject]
}, {
   idAttribute: 'key'
});
