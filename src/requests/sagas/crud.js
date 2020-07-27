import { put, takeLatest, call } from 'redux-saga/effects';

import { requestFailure } from 'requests/actions';

const request = (type, operation) => {

   function* gen(action) {
      let response;
      try {
         if (action.id) {
            response = yield call(operation, action.id, action.payload);
         } else {
            response = yield call(operation, action.payload);
         }
         yield put({ type, payload: response.content });
      } catch (err) {
         yield put(requestFailure(err));
      }
   }

   return gen;
};

const create = (code, api) => request(`${code}_SAVED`, api.create);

const del = (code, api) => request(`${code}_DELETED`, api.delete);

const read = (code, api) => request(`${code}_READ`, api.read);

const update = (code, api) => request(`${code}_UPDATED`, api.update);

const crud = (code, api) => {
   return [
      takeLatest(`CREATE_${code}`, create(code, api)),
      takeLatest(`DELETE_${code}`, del(code, api)),
      takeLatest(`READ_${code}`, read(code, api)),
      takeLatest(`UPDATE_${code}`, update(code, api))
   ];
};

export {
   create,
   del,
   read,
   update,
   crud
};
