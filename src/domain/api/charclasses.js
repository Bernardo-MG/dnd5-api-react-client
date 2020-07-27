import { crudRequests } from 'requests/operations';

import { normalize } from 'normalizr';
import { charClass as charClassSchema, charClassList as charClassListSchema } from 'domain/schema';

const path = '/classes/';

function normalizeCharClass(response) {
   const normalized = normalize(response, charClassSchema);
   let result;

   if (normalized.entities.charclasses) {
      result = normalized.entities;
   } else {
      result = {};
   }

   return result;
}

function normalizeCharClassList(response) {
   const normalized = normalize(response, [charClassListSchema]);
   let result;

   if (normalized.entities.charclasslist) {
      result = normalized.entities;
   } else {
      result = {};
   }

   return result;
}

const transformResults = (func) => (response) => {
   const content = func(response.results);
   return { ...response, content };
};

const transformContent = (func) => (response) => {
   const content = func(response);
   return { ...response, content };
};

const CharClassList = {
   read: () => crudRequests.read(path).then(transformResults(normalizeCharClassList))
};

const CharClass = {
   read: (id) => crudRequests.read(`${path}${id}`).then(transformContent(normalizeCharClass))
};

export {
   CharClass, CharClassList
};
