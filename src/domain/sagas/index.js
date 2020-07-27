import { requestFailureSagas } from 'requests/sagas/failure';

import { CharClass, CharClassList } from 'domain/api';

import { crud } from 'requests/sagas/crud';

export const apiSagas = [
   ...requestFailureSagas,
   ...crud('CHAR_CLASS_LIST', CharClassList),
   ...crud('CHAR_CLASS', CharClass)
];
