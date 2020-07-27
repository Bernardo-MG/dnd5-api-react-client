import { schema } from 'normalizr';

/**
 * Classes schema.
 */
export const charClass = new schema.Entity('charclasses', {}, {
   idAttribute: 'index'
});

/**
 * Classes list schema.
 */
export const charClassList = new schema.Entity('charclasslist', {}, {
   idAttribute: 'index'
});
